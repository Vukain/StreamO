import styles from './StreamerSummary.module.sass';
import { clsx } from 'clsx'
import { Avatar } from '@/ui/Avatar/Avatar';
import { ContentCard } from '@/ui/ContentCard/ContentCard';
import { Button } from '@/components/Button/Button';
import { voteStreamer } from '@/utils/voteStreamer';
import Link from 'next/link';
import { StreamerKudos } from './StreamerKudos/StreamerKudos';

type Props = {
    data: Streamer,
    syncStreamers: () => Promise<void>
};

export const StreamerSummary: React.FC<Props> = ({ data, syncStreamers }) => {

    const { streamerId, name } = data;



    return (
        <div className={styles.wrapper} >
            <ContentCard>
                <div className={styles.card}>
                    <StreamerKudos streamer={data} syncStreamers={syncStreamers} />
                    {/* <div onClick={voteAndRefresh} className={clsx(styles.score, score > 0 && styles.green, score < 0 && styles.red)}>{score}</div> */}
                    <Avatar miniature={true} />
                    <div className={styles.name}>{name}</div>
                    <Link href={`/streamers/${streamerId}`} className={styles.link}>
                        <Button color='purple' onClick={() => { }}>details</Button>
                    </Link>
                </div>
            </ContentCard>
        </div>
    );
};