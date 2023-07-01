import clsx from 'clsx';
import styles from './NameInput.module.sass';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../StreamerForm';

type Props = {
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
};

export const NameInput: React.FC<Props> = ({ errors, register }) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label}>name</label>
      <input
        className={clsx(styles.input, errors.name && styles.error)}
        placeholder="STREAMER NAME"
        {...register('name', { required: true })}
      />
      {errors.name && <p className={styles.error_text}>name is required</p>}
    </div>
  );
};
