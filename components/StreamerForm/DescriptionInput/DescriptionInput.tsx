import clsx from 'clsx';
import styles from './DescriptionInput.module.sass';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { FormData } from '../StreamerForm';

type Props = {
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
};

export const DescriptionInput: React.FC<Props> = ({ errors, register }) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label}>description</label>
      <textarea
        className={clsx(styles.textarea, errors.description && styles.error)}
        placeholder="STREAMER DESCRIPTION"
        {...register('description', { required: true })}
      />
      {errors.description && <p className={styles.error_text}>description is required</p>}
    </div>
  );
};
