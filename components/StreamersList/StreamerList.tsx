import { useEffect, useState } from 'react';
import styles from './StreamerList.module.sass';
import { fetchStreamers } from '@/utils/fetchStreamers';
import { StreamerSummary } from './StreamerSummary/StreamerSummary';
import { LoadingSpinner } from '@/ui/LoadingSpinner/LoadingSpinner';
import { Modal } from '../Modal/Modal';
import { StreamerForm } from '../StreamerForm/StreamerForm';

type Props = {
    streamers: null | Streamer[]
    syncStreamers: () => Promise<void>
};

export const StreamerList: React.FC<Props> = ({ streamers, syncStreamers }) => {

    return (
        <article className={styles.toplist}>
            {streamers !== null ? streamers.map(streamer => <StreamerSummary data={streamer} syncStreamers={syncStreamers} key={streamer.streamerId} />) : <LoadingSpinner />}
        </article>
    );
}