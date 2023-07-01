import Image from 'next/image';
import styles from './Logo.module.sass';
import LogoImage from '@/public/streamo-logo.png';
import Link from 'next/link';
// import LogoImage from "@/public/streamo-logo.svg";

export const Logo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/streamers">
        <Image
          className={styles.logo}
          src={LogoImage}
          alt="streamo logo"
          sizes="(orientation: portrait) 60vw, 20vw"
          priority={true}
        />
      </Link>

      {/* <LogoImage className={styles.logo} /> */}
    </div>
  );
};
