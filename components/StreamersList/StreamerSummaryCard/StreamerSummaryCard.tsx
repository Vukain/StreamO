import styles from './StreamerSummaryCard.module.sass';

type Props = {
    data: Streamer
};

export const StreamerSummaryCard: React.FC<Props> = ({ data: { _id, name, score } }) => {

    return (
        <div className={styles.card}>
            {name} - {score}
        </div>
    );
};