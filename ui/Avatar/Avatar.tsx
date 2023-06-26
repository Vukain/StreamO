import Image from 'next/image';
import { clsx } from 'clsx';
import styles from './Avatar.module.sass';

import AvatarImage from '@/public/limmy-avatar.webp'

type Props = {
    miniature?: boolean
};

export const Avatar: React.FC<Props> = ({ miniature = false }) => {

    return (
        <div className={clsx(styles.wrapper, miniature && styles.mini)}>

            <Image className={styles.avatar}
                src={AvatarImage}
                alt="streamer avatar"
                sizes={`(orientation: portrait) ${miniature ? 10 : 20}vh, ${miniature ? 20 : 40}vh`}
            />
        </div>
    );
};