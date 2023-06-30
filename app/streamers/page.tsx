'use client'

import styles from './page.module.sass'

import { useEffect, useState } from "react";
import { fetchStreamers } from "@/utils/fetchStreamers";
import { Modal } from "@/components/Modal/Modal";
import { StreamerForm } from "@/components/StreamerForm/StreamerForm";
import { StreamerList } from "@/components/StreamersList/StreamerList";
import { Button } from '@/components/Button/Button';

const Streamers = () => {

    const [streamers, setStreamers] = useState<null | Streamer[]>(null);
    const [addingStreamer, setAddingStreamer] = useState(false);

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
                <Modal setActive={setAddingStreamer}>
                    <StreamerForm syncStreamers={syncStreamers} />
                </Modal>}

            <div className={styles.add_button}>
                <Button color='purple' onClick={() => { setAddingStreamer(true) }}>add streamer</Button>
            </div>
        </main>
    );
};

export default Streamers;