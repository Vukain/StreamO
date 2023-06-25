import Image from 'next/image'
import LogoImage from '@/public/streamo-logo.png'

import styles from './Logo.module.sass';

// import LogoImage from "../../public/streamo-logo.svg";

export const Logo: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <Image className={styles.logo}
                src={LogoImage}
                alt="streamo logo"
                sizes="(orientation: landscape) 20vw, 40vw"
            />

            {/* <LogoImage className={styles.logo} /> */}

        </div>
    );
};