import styles from './Button.module.sass';
import clsx from 'clsx';

type Props = {
    asInput?: boolean,
    onClick?: () => void
    color?: 'purple' | 'blue',
    disabled?: boolean,
    children?: string
};

export const Button: React.FC<Props> = ({ onClick = () => { }, asInput = false, color, disabled = false, children }) => {

    if (asInput) {
        return <input className={clsx(styles.button, color && styles[color], disabled && styles.disabled)} type="submit" value={children} disabled={disabled} />
    } else {
        return <button className={clsx(styles.button, color && styles[color], disabled && styles.disabled)} type="button" onClick={onClick} disabled={disabled}>{children}</button >;
    };
};