import { useEffect, useState } from 'react';
import styles from './StreamerList.module.sass';
import { fetchStreamers } from '@/utils/fetchStreamers';
import { StreamerSummaryCard } from './StreamerSummaryCard/StreamerSummaryCard';

export const StreamerList: React.FC = () => {

    const [streamers, setStreamers] = useState<null | Array<any>>(null);

    useEffect(() => {
        syncStreamers();
    }, [])

    const syncStreamers = () => {
        fetchStreamers().then(response => setStreamers(response));
    };

    return (
        <article>
            {streamers !== null ? streamers.map((streamer, index) => (<StreamerSummaryCard data={streamer} key={index} />)) : <p>Loading streamers</p>}
        </article>
    );
}