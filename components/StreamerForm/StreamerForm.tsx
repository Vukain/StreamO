import styles from './StreamerForm.module.sass';
import { clsx } from "clsx";
import { useFieldArray, useForm } from 'react-hook-form';
import { postStreamer } from "@/utils/postStreamer";
import { Button } from "../Button/Button";
import { useState } from "react";

type Props = {
    syncStreamers: () => Promise<void>
    closeModal?: (() => void) | null
};

type Link = Record<'id' | 'platform' | 'link', string>;

type FormData = {
    nickname: string,
    description: string,
    platforms: string,
    links: Array<{ id?: string, platform: string, link?: string }>
};

export const StreamerForm: React.FC<Props> = ({ syncStreamers, closeModal }) => {

    const [availablePlatforms, setAvailablePlatforms] = useState(['twitch', 'youtube', 'kick']);


    const testData = {
        name: 'Limmy',
        description: 'Lorem ipsum',
        score: 123,
        links: {
            twitch: '',
            youtube: 'https://www.youtube.com/@Vsauce',
            tiktok: '',
            kick: '',
            rumble: ''
        }
    };

    const {
        register,
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm<FormData>({
        // defaultValues: {
        //     links: { platform: '', link: '' }
        // }
    });

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        rules: { minLength: 1, required: true },
        name: "links"
    });

    const addStreamer = (data: any) => {
        // console.log(data)
        console.log(getValues('links'))
        console.log(errors);
        // postStreamer(testData);
        // if (closeModal) {
        //     closeModal();
        // };
    };

    const addNewPlatformField = () => {

        const selected = getValues('platforms');

        console.log(getValues('links'))

        append({ platform: selected });
        setAvailablePlatforms(prevState => prevState.filter(value => value !== selected));
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(addStreamer)}>

            <input {...register('nickname', { required: true })} />
            {errors.nickname && <p>Nickname is required.</p>}
            <select {...register('platforms')}>
                {availablePlatforms.map((platform, index) => <option value={platform} key={index}>{platform}</option>)}
            </select>

            <Button text='add platform' onClick={addNewPlatformField} />
            {errors.links && <p>At least one link must be added</p>}
            {fields.map((obj, index) => {
                console.log(obj)

                return (
                    <div key={obj.id}>
                        <p>{obj.platform}</p>
                        <input type='text' {...register(`links.${index}.link` as const, { required: index === 0 })} />
                        <button type='button' onClick={() => remove(index)}>X</button>
                    </div>
                )
            })}
            <Button text='add streamer' asInput={true} />
        </form>
    );
};