import { Avatar } from '@/ui/Avatar/Avatar';
import styles from './StreamerDetails.module.sass';

import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '../Button/Button';
import { deleteStreamer } from '@/utils/deleteStreamer';
type Props = {
    data: Streamer,
    syncStreamers: (id: number) => void
};

export const StreamerDetails: React.FC<Props> = ({ data: { streamerId, name, description, links }, syncStreamers }) => {


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
                        <Button color='purple' onClick={() => deleteStreamer(streamerId)}>delete streamer</Button>
                    </div>
                </div>
            </ContentCard>
        </article>
    );
};