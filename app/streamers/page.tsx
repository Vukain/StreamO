'use client'

import { StreamerList } from "@/components/StreamersList/StreamerList";
import styles from './page.module.sass'
import { useEffect, useState } from "react";
import { fetchStreamers } from "@/utils/fetchStreamers";
import { Modal } from "@/components/Modal/Modal";
import { StreamerForm } from "@/components/StreamerForm/StreamerForm";

const Streamers = () => {

    const [streamers, setStreamers] = useState<null | Array<Streamer>>(null);
    const [addingStreamer, setAddingStreamer] = useState(true);

    useEffect(() => {
        syncStreamers();
    }, [])

    const syncStreamers = async () => {
        try {
            const streamers = await fetchStreamers();
            setStreamers(streamers);
        } catch (error) {
            console.error(error)
        };
    };

    return (
        <main className={styles.main}>
            <StreamerList streamers={streamers} syncStreamers={syncStreamers} />

            {addingStreamer &&
                <Modal setActive={setAddingStreamer} autoClose={0}>
                    <StreamerForm syncStreamers={syncStreamers} />
                </Modal>}
        </main>
    );
};

export default Streamers;