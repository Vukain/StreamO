import styles from './StreamerDetails.module.sass';
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '../Button/Button';
import { deleteStreamer } from '@/utils/deleteStreamer';
import { useRouter } from 'next/navigation';
import KickLogo from '../../public/kick-logo.svg';
import RumbleLogo from '../../public/rumble-logo.svg';
import TiktokLogo from '../../public/tiktok-logo.svg';
import TwitchLogo from '../../public/twitch-logo.svg';
import YoutubeLogo from '../../public/youtube-logo-full.svg';
import { Link } from './Link/Link';

type Props = {
  data: Streamer;
  editStreamer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StreamerDetails: React.FC<Props> = ({
  data: { streamerId, name, description, links, avatarId },
  editStreamer,
}) => {
  const { push } = useRouter();

  const logos = { kick: KickLogo, rumble: RumbleLogo, tiktok: TiktokLogo, twitch: TwitchLogo, youtube: YoutubeLogo };

  const deleteAndRedirect = () => {
    deleteStreamer(streamerId);
    push('/streamers');
  };

  return (
    <article className={styles.details}>
      <ContentCard>
        <div className={styles.card}>
          <Avatar miniature={false} avatarId={avatarId} />

          <div className={styles.links}>
            {links
              .sort((a, b) => a.platform.localeCompare(b.platform))
              .map(({ link, platform }, index) => (
                <Link key={index} link={link!} platform={platform} icon={logos[platform]} />
              ))}
          </div>

          <div className={styles.description}>
            <p className={styles.nick}>{name}</p>
            <p className={styles.text}>{description}</p>
          </div>
          <div className={styles.button}>
            <Button
              color="blue"
              onClick={() => {
                editStreamer(true);
              }}
            >
              edit streamer
            </Button>
          </div>
          <div className={styles.button}>
            <Button color="purple" onClick={deleteAndRedirect}>
              delete streamer
            </Button>
          </div>
        </div>
      </ContentCard>
    </article>
  );
};
