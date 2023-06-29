import styles from './StreamerSummary.module.sass';
import { clsx } from 'clsx'
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '@/components/Button/Button';
import { voteStreamer } from '@/utils/voteStreamer';

type Props = {
    data: Streamer,
    syncStreamers: () => Promise<void>
};

export const StreamerSummary: React.FC<Props> = ({ data: { streamerId, name, score }, syncStreamers }) => {

    const voteAndRefresh = async () => {
        await voteStreamer(streamerId)

        syncStreamers();
    };

    return (
        <div className={styles.wrapper} onClick={voteAndRefresh}>
            <ContentCard>
                <div className={styles.card}>
                    <div className={clsx(styles.score, score > 0 && styles.green, score < 0 && styles.red)}>{score}</div>
                    <Avatar miniature={true} />
                    <div className={styles.name}>{name}</div>
                    <Button color='purple' onClick={() => { }}>details</Button>
                </div>
            </ContentCard>
        </div>
    );
};