import styles from './Link.module.sass';

type Props = {
  link: string;
  platform: string;
  icon: any;
};

export const Link: React.FC<Props> = ({ link, platform, icon: Icon }) => {
  const parsedLink = /^https?:\/\//i.test(link) ? link : 'http://' + link;

  return (
    <a
      key={platform}
      href={parsedLink}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform} link`}
    >
      <Icon className={styles.icon} />
    </a>
  );
};
