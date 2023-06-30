import clsx from 'clsx';
import styles from './StreamerKudos.module.sass';

import ArrowImage from "@/public/upvote-arrow.svg";
import { voteStreamer } from '@/utils/voteStreamer';
import { useEffect, useState } from 'react';

type Props = {
    streamer: Streamer,
    syncStreamers: () => Promise<void>
};

export const StreamerKudos: React.FC<Props> = ({ streamer, syncStreamers }) => {

    // Makes visual score update faster than fetching new score
    const [cachedScore, setCachedScore] = useState(streamer.score);

    useEffect(() => {
        // Throttle api calls
        const timeoutCall = setTimeout(() => {
            voteStreamer({ ...streamer, score: cachedScore }).then(_ => syncStreamers())
        }, 300)
        return () => {
            clearTimeout(timeoutCall);
        };

    }, [cachedScore])

    const voteAndRefresh = (scoreDifference: number) => {
        setCachedScore(cachedScore + scoreDifference)
    };

    return (
        <div className={styles.kudos}>
            <ArrowImage className={clsx(styles.arrow, styles.upvote)} onClick={() => voteAndRefresh(1)} />
            <div className={clsx(styles.score, cachedScore > 0 && styles.green, cachedScore < 0 && styles.red)}>{cachedScore}</div>
            <ArrowImage className={clsx(styles.arrow, styles.downvote)} onClick={() => voteAndRefresh(-1)} />
        </div>
    );
};