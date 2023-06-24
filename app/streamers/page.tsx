'use client'

import { fetchStreamers } from "../../utils/fetchStreamers";
import { postStreamer } from "../../utils/postStreamer";

const Streamers = () => {

    return (
        <main >
            <button onClick={fetchStreamers}>Get</button>
            <button onClick={() => postStreamer({ name: 'new test' })}>Post</button>
        </main>
    );
};

export default Streamers;