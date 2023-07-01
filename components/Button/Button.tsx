import styles from './Button.module.sass';
import clsx from 'clsx';

type Props = {
  asSubmit?: boolean;
  onClick?: () => void;
  color?: 'purple' | 'blue';
  disabled?: boolean;
  children?: string;
};

export const Button: React.FC<Props> = ({
  onClick = () => {},
  asSubmit = false,
  color,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={clsx(styles.button, color && styles[color], disabled && styles.disabled)}
      type={asSubmit ? 'submit' : `button`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
