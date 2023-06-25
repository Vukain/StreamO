import { voteStreamer } from '@/utils/voteStreamer';
import styles from './StreamerSummaryCard.module.sass';

type Props = {
    data: Streamer,
    syncStreamers: any
};

export const StreamerSummaryCard: React.FC<Props> = ({ data: { _id, name, score }, syncStreamers }) => {

    const voteAndRefresh = () => {
        voteStreamer(_id);
        setTimeout(() => { syncStreamers() }, 500)
    }

    return (
        <div className={styles.card} onClick={voteAndRefresh}>
            {name} - {score}
        </div>
    );
};