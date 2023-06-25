import styles from './Logo.module.sass';

import LogoImage from "../../public/streamo-logo.svg";

export const Logo: React.FC = () => {

    return (
        <div className={styles.wrapper}>

            <img className={styles.logo} src="/streamo-logo.png" alt="streamo logo" />
            {/* <LogoImage className={styles.logo} /> */}

        </div>
    );
};