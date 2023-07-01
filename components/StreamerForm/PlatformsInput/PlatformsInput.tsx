import styles from './PlatformsInput.module.sass';
import clsx from 'clsx';
import validator from 'validator';
import type {
  UseFormRegister,
  FieldErrors,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import { Button } from '@/components/Button/Button';

type Props = {
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  fields: FieldArrayWithId<FormData, 'links', 'id'>[];
  append: UseFieldArrayAppend<FormData, 'links'>;
  remove: UseFieldArrayRemove;
  getValues: UseFormGetValues<FormData>;
  setValue: UseFormSetValue<FormData>;
  availablePlatforms: string[];
  setAvailablePlatforms: React.Dispatch<React.SetStateAction<string[]>>;
};

type FormData = {
  name: string;
  description: string;
  platforms: string;
  links: Link[];
  id_?: any;
};

export const PlatformsInput: React.FC<Props> = ({
  errors,
  fields,
  register,
  getValues,
  setValue,
  append,
  remove,
  availablePlatforms,
  setAvailablePlatforms,
}) => {
  const addNewPlatformField = () => {
    const selected = getValues('platforms');
    append({ platform: selected });
    setAvailablePlatforms((prevState) => {
      const filteredPlatforms: string[] = prevState.filter((value) => value !== selected);
      setTimeout(() => {
        setValue('platforms', filteredPlatforms[0]);
      }, 100);
      return filteredPlatforms;
    });
  };

  const fieldDelete = (index: number, obj: FieldArrayWithId<FormData, 'links', 'id'>) => {
    remove(index);
    setAvailablePlatforms((prevState) => {
      const updatedPlatforms = [...prevState, obj.platform];
      return updatedPlatforms;
    });
  };

  return (
    <div className={styles.input_group}>
      <label className={styles.label}>links</label>
      <div className={styles.link_group}>
        <div className={styles.platform_select}>
          <select
            className={clsx(styles.select, availablePlatforms.length === 0 && styles.disabled)}
            {...register('platforms')}
            disabled={availablePlatforms.length === 0}
          >
            {availablePlatforms.map((platform, index) => (
              <option value={platform} key={index}>
                {platform}
              </option>
            ))}
          </select>
          <Button color="blue" onClick={addNewPlatformField} disabled={availablePlatforms.length === 0}>
            add platform
          </Button>
          {errors.links && <p className={styles.error_text}>At least one proper link must be added</p>}
        </div>

        {fields.map((obj, index) => {
          return (
            <div key={obj.id} className={styles.platform}>
              <input
                className={clsx(styles.input, errors.links && errors.links[index] && styles.error)}
                placeholder={obj.platform}
                type="text"
                {...register(`links.${index}.link` as const, {
                  required: true,
                  validate: (value) => validator.isURL(value!.trim()),
                })}
              />
              <Button
                color="purple"
                onClick={() => {
                  fieldDelete(index, obj);
                }}
              >
                delete
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
