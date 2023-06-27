import { clsx } from 'clsx';
import styles from './ContentCard.module.sass';

type Props = {
    hoverable?: boolean,
    children: JSX.Element,
};

export const ContentCard: React.FC<Props> = ({ hoverable = false, children }) => {

    return (
        <div className={clsx(styles.card, hoverable && styles.hoverable)}>
            {children}
        </div>
    );
};