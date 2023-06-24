'use client'

import { StreamerList } from "@/components/StreamersList/StreamerList";
import { fetchStreamers } from "../../utils/fetchStreamers";
import { postStreamer } from "../../utils/postStreamer";

const Streamers = () => {

    const testData = {
        name: 'Vsauce 1',
        description: 'Lorem ipsum',
        score: 0,
        links: {
            twitch: '',
            youtube: 'https://www.youtube.com/@Vsauce',
            tiktok: '',
            kick: '',
            rumble: ''
        }
    };

    return (
        <main >
            <StreamerList />
            {/* <button onClick={() => fetchStreamers()}>Get</button>
            <button onClick={() => postStreamer(testData)}>Post</button> */}
        </main>
    );
};

export default Streamers;