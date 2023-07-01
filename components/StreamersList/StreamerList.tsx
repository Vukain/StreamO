import styles from './StreamerList.module.sass';
import { StreamerSummary } from './StreamerSummary/StreamerSummary';
import { LoadingSpinner } from '@/ui/LoadingSpinner/LoadingSpinner';

type Props = {
  streamers: null | Streamer[];
  syncStreamers: () => Promise<void>;
};

export const StreamerList: React.FC<Props> = ({ streamers, syncStreamers }) => {
  return (
    <article className={styles.toplist}>
      {streamers === null ? (
        <LoadingSpinner />
      ) : streamers.length > 0 ? (
        streamers.map((streamer) => (
          <StreamerSummary data={streamer} syncStreamers={syncStreamers} key={streamer.streamerId} />
        ))
      ) : (
        <p className={styles.empty}>Streamer list is empty...</p>
      )}
    </article>
  );
};
