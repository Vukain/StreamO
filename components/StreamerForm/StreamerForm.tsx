import styles from './StreamerForm.module.sass';
import { useState } from "react";
import { clsx } from "clsx";
import { useFieldArray, useForm } from 'react-hook-form';
import type { FieldArrayWithId } from "react-hook-form"
import validator from 'validator';
import { postStreamer } from "@/utils/postStreamer";
import { Button } from "../Button/Button";

type Props = {
    syncStreamers?: () => Promise<void>,
    closeModal?: () => void
    initialStreamerData?: Streamer
};

type Link = { platform: string, link?: string };

type FormData = {
    name: string,
    description: string,
    platforms: string,
    links: Link[]
};

export const StreamerForm: React.FC<Props> = ({ syncStreamers, closeModal, initialStreamerData }) => {

    const [availablePlatforms, setAvailablePlatforms] = useState(['twitch', 'youtube', 'kick', 'tiktok', 'rumble']);

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormData>({
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        rules: { minLength: 1, required: true },
        name: "links"
    });

    const addStreamer = async (data: FormData) => {
        const streamerData = {
            name: data.name,
            streamerId: Date.now(),
            description: data.description,
            score: 0,
            links: data.links
        };

        try {
            await postStreamer(streamerData);

            if (syncStreamers) syncStreamers();
            if (closeModal) closeModal();
        } catch (error) {
            console.log(error);
        };
    };

    const addNewPlatformField = () => {
        const selected = getValues('platforms');
        append({ platform: selected });
        setAvailablePlatforms((prevState) => {
            const filteredPlatforms: string[] = prevState.filter(value => value !== selected);
            setTimeout(() => {
                setValue('platforms', filteredPlatforms[0]);
            }, 100);
            return filteredPlatforms;
        });
    };

    const mapFields = () => {
        const fieldDelete = (index: number, obj: FieldArrayWithId<FormData, "links", "id">) => {
            remove(index);
            setAvailablePlatforms(prevState => {
                const updatedPlatforms = [...prevState];
                updatedPlatforms.push(obj.platform);
                return updatedPlatforms;
            });
        };

        return fields.map((obj, index) => {
            return (
                <div key={obj.id} className={styles.platform}>
                    <input className={clsx(styles.input, errors.links && errors.links[index] && styles.error)}
                        placeholder={obj.platform}
                        type='text'
                        {...register(`links.${index}.link` as const, {
                            required: true,
                            validate: value => validator.isURL(value!.trim()),
                        })} />
                    <Button color='purple' onClick={() => { fieldDelete(index, obj) }}>delete</Button>
                    {/* {errors.links && errors.links[index] && <p className={styles.error_text}>This is not a proper link, fix it or delete the field.</p>} */}
                </div>
            );
        });
    };

    const nameInput = <div className={styles.input_group}>
        <label className={styles.label}>name</label>
        <input className={clsx(styles.input, errors.name && styles.error)} placeholder='STREAMER NAME' {...register('name', { required: true })} />
        {errors.name && <p className={styles.error_text}>name is required</p>}
    </ div>;

    const descriptionInput = <div className={styles.input_group}>
        <label className={styles.label}>description</label>
        <textarea className={clsx(styles.textarea, errors.description && styles.error)} placeholder='STREAMER DESCRIPTION' {...register('description', { required: true })} />
        {errors.description && <p className={styles.error_text}>description is required</p>}
    </ div>;

    const platformsInput =
        <div className={styles.input_group}>
            <label className={styles.label}>links</label>
            <div className={styles.link_group}>
                <div className={styles.platform_select}>
                    <select className={clsx(styles.select, availablePlatforms.length === 0 && styles.disabled)} {...register('platforms')} disabled={availablePlatforms.length === 0}>
                        {availablePlatforms.map((platform, index) => <option value={platform} key={index}>{platform}</option>)}
                    </select>
                    <Button color="blue" onClick={addNewPlatformField} disabled={availablePlatforms.length === 0}>add platform</Button>
                    {errors.links && <p className={styles.error_text}>At least one proper link must be added</p>}
                </div>
                {mapFields()}
            </ div>
        </div >

    return (
        <form className={styles.form} onSubmit={handleSubmit(addStreamer)}>

            {nameInput}
            {descriptionInput}
            {platformsInput}

            <div className={styles.buttons}>
                <Button color="blue" asInput={true}>save streamer</Button>
                <Button color='purple' onClick={closeModal}>cancel</Button>
            </div>
        </form>
    );
};