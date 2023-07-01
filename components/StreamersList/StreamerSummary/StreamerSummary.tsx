import styles from './StreamerSummary.module.sass';
import Link from 'next/link';
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '@/components/Button/Button';
import { StreamerKudos } from './StreamerKudos/StreamerKudos';

type Props = {
  data: Streamer;
  syncStreamers: () => Promise<void>;
};

export const StreamerSummary: React.FC<Props> = ({ data, syncStreamers }) => {
  const { streamerId, name, avatarId } = data;

  return (
    <div className={styles.summary}>
      <ContentCard>
        <div className={styles.card}>
          <StreamerKudos streamer={data} syncStreamers={syncStreamers} />
          <Avatar miniature={true} avatarId={avatarId} />
          <div className={styles.name}>{name}</div>
          <Link href={`/streamers/${streamerId}`} className={styles.link}>
            <Button color="purple" onClick={() => {}}>
              details
            </Button>
          </Link>
        </div>
      </ContentCard>
    </div>
  );
};
