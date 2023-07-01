import styles from './StreamerDetails.module.sass';
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '../Button/Button';
import { deleteStreamer } from '@/utils/deleteStreamer';
import { useRouter } from 'next/navigation';

type Props = {
  data: Streamer;
  syncStreamer: (id: number) => void;
  editStreamer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StreamerDetails: React.FC<Props> = ({
  data: { streamerId, name, description, links, avatarId },
  syncStreamer,
  editStreamer,
}) => {
  const { push } = useRouter();

  const deleteAndRedirect = () => {
    deleteStreamer(streamerId);
    push('/streamers');
  };

  return (
    <article className={styles.details}>
      <ContentCard>
        <div className={styles.card}>
          <Avatar miniature={false} avatarId={avatarId} />
          <div className={styles.info}></div>

          <div className={styles.description}>
            <p className={styles.label}>Description</p>
            <p className={styles.text}>{description}</p>
          </div>

          <div className={styles.buttons}>
            <Button
              color="blue"
              onClick={() => {
                editStreamer(true);
              }}
            >
              edit streamer
            </Button>
            <Button color="purple" onClick={deleteAndRedirect}>
              delete streamer
            </Button>
          </div>
        </div>
      </ContentCard>
    </article>
  );
};
