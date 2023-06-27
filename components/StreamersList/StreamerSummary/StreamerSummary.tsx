import { clsx } from 'clsx'
import { voteStreamer } from '@/utils/voteStreamer';
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import styles from './StreamerSummary.module.sass';

type Props = {
    data: Streamer,
    syncStreamers: () => Promise<void>
};

export const StreamerSummary: React.FC<Props> = ({ data: { _id, name, score }, syncStreamers }) => {

    const voteAndRefresh = async () => {
        voteStreamer(_id).then(res => {
            setTimeout(() => {
                syncStreamers();
            }, 50)
        });
    };

    return (
        <div className={styles.wrapper} onClick={voteAndRefresh}>
            <ContentCard hoverable={true}>
                <div className={styles.card}>
                    <div className={clsx(styles.score, score > 0 && styles.green, score < 0 && styles.red)}>{score}</div>
                    <Avatar miniature={true} />
                    <div className={styles.name}>{name}</div>
                </div>
            </ContentCard>
        </div>
    );
};