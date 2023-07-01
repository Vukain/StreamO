import styles from './StreamerForm.module.sass';
import validator from 'validator';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { useFieldArray, useForm } from 'react-hook-form';

import { postStreamer } from '@/utils/postStreamer';
import { updateStreamer } from '@/utils/updateStreamer';
import { Button } from '../Button/Button';
import { NameInput } from './NameInput/NameInput';
import { DescriptionInput } from './DescriptionInput/DescriptionInput';
import { PlatformsInput } from './PlatformsInput/PlatformsInput';

type Props = {
  syncStreamers?: () => Promise<void>;
  closeModal?: () => void;
  initialStreamerData?: Streamer;
};

type Fields = 'name' | 'links' | 'description';

type FormData = {
  name: string;
  description: string;
  platforms: string;
  links: Link[];
  id_?: any;
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
  } = useForm<FormData>({});

  const { fields, append, remove } = useFieldArray({
    control,
    rules: { minLength: 1, required: true },
    name: 'links',
  });

  useEffect(() => {
    if (initialStreamerData) {
      const fields = ['name', 'description', 'links'];
      fields.map((field) => {
        setValue(`${field as Field}`, initialStreamerData[field as Fields]);
      });
      const usedFields = initialStreamerData.links.map((link) => link.platform);
      const updatedPlatforms = availablePlatforms.filter((available) => !usedFields.includes(available));
      setAvailablePlatforms(updatedPlatforms);
    }
  }, []);

  const saveStreamer = async (data: FormData) => {
    const streamerData = {
      name: data.name,
      streamerId: initialStreamerData ? initialStreamerData.streamerId : Date.now(),
      description: data.description,
      score: initialStreamerData ? initialStreamerData.score : 0,
      links: data.links,
      avatarId: initialStreamerData ? initialStreamerData.avatarId : Math.floor(Math.random() * 2),
    };

    try {
      if (initialStreamerData) {
        await updateStreamer(streamerData);
      } else {
        await postStreamer(streamerData);
      }
      if (syncStreamers) syncStreamers();
      if (closeModal) closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(saveStreamer)}>
      <NameInput register={register} errors={errors} />
      <DescriptionInput register={register} errors={errors} />
      <PlatformsInput
        fields={fields}
        errors={errors}
        register={register}
        append={append}
        remove={remove}
        getValues={getValues}
        setValue={setValue}
        availablePlatforms={availablePlatforms}
        setAvailablePlatforms={setAvailablePlatforms}
      />

      <div className={styles.buttons}>
        <Button color="blue" asSubmit={true}>
          save streamer
        </Button>
        <Button color="purple" onClick={closeModal}>
          cancel
        </Button>
      </div>
    </form>
  );
};
