import { clsx } from 'clsx'
import { voteStreamer } from '@/utils/voteStreamer';
import styles from './StreamerSummaryCard.module.sass';
import { Avatar } from '@/ui/Avatar/Avatar';

type Props = {
    data: Streamer,
    syncStreamers: any
};

export const StreamerSummaryCard: React.FC<Props> = ({ data: { _id, name, score }, syncStreamers }) => {

    const voteAndRefresh = async () => {
        voteStreamer(_id).then(res => {
            setTimeout(() => {
                syncStreamers();
            }, 50)
        });
    };

    return (
        <div className={styles.card} onClick={voteAndRefresh}>

            <div className={clsx(styles.score, score > 0 && styles.green, score < 0 && styles.red)}>{score}</div>
            <Avatar miniature={true} />
            <div className={styles.name}>{name}</div>

        </div>
    );
};