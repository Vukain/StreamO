import clsx from 'clsx';
import styles from './Button.module.sass';

type Props = {
    text: string,
    asInput?: boolean,
    onClick?: () => void,
    color?: 'purple' | 'blue',
    disabled?: boolean
};

export const Button: React.FC<Props> = ({ text, onClick = () => { }, asInput = false, color, disabled = false }) => {

    if (asInput) {
        return <input className={clsx(styles.button, color && styles[color], disabled && styles.disabled)} type="submit" value={text} disabled={disabled} />
    } else {
        return <button className={clsx(styles.button, color && styles[color], disabled && styles.disabled)} type="button" onClick={onClick} disabled={disabled} > {text}</button >;
    };
};