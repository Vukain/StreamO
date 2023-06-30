import { Avatar } from '@/ui/Avatar/Avatar';
import styles from './StreamerDetails.module.sass';

import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '../Button/Button';
import { deleteStreamer } from '@/utils/deleteStreamer';
import { useRouter } from 'next/navigation';
type Props = {
    data: Streamer,
    syncStreamer: (id: number) => void
};

export const StreamerDetails: React.FC<Props> = ({ data: { streamerId, name, description, links }, syncStreamer }) => {

    const { push } = useRouter();

    const deleteAndRedirect = () => {
        deleteStreamer(streamerId);
        push('/streamers');
    };



    return (
        <article className={styles.details}>
            <ContentCard>
                <div className={styles.card}>
                    <Avatar miniature={false} id={streamerId} />
                    <div className={styles.info}>

                    </div>

                    <div className={styles.description}>
                        <p className={styles.label}>Description</p>
                        <p className={styles.text}>{description}</p>
                    </div>

                    <div className={styles.buttons}>
                        <Button color="blue" onClick={() => { }}>edit streamer</Button>
                        <Button color='purple' onClick={deleteAndRedirect}>delete streamer</Button>
                    </div>
                </div>
            </ContentCard>
        </article>
    );
};