import { clsx } from 'clsx';
import styles from './ContentCard.module.sass';

type Props = {
  children: JSX.Element;
};

export const ContentCard: React.FC<Props> = ({ children }) => {
  return (
    <div className={clsx(styles.card)}>
      <div className={styles.background} />
      {children}
    </div>
  );
};
