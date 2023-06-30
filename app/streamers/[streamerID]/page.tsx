'use client'

import styles from './page.module.sass'
import { useEffect, useState } from 'react';
import { notFound, usePathname, useRouter } from 'next/navigation';
import { fetchStreamers } from '@/utils/fetchStreamers';
import { getStreamerId } from '@/utils/getStreamerId';
import { StreamerDetails } from '@/components/StreamerDetails/StreamerDetails';
import { LoadingSpinner } from '@/ui/LoadingSpinner/LoadingSpinner';


const Streamer = () => {

    const [streamer, setStreamer] = useState<null | Streamer>(null);
    const [loadingError, setLoadingError] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const streamerId = getStreamerId(pathname);
        syncStreamer(streamerId);
    }, [])

    const syncStreamer = async (id: number) => {

        const streamer = await fetchStreamers(id);
        if (!streamer) {
            setLoadingError(true);
        } else {
            setStreamer(streamer);
        };
    };

    if (!streamer && loadingError) notFound();

    return (
        <main className={styles.main}>
            {streamer ? <StreamerDetails data={streamer} syncStreamer={syncStreamer} /> : <LoadingSpinner />}
        </main>
    )
};

export default Streamer;