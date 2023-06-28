import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { connectToMongo } from '@/utils/connectToMongo';
import { getStreamerId } from '@/utils/getStreamerId';

export const GET = async (request: NextRequest) => {

    const db = await connectToMongo();
    const id = getStreamerId(request.url);

    const streamer = await db.collection("streamers").findOne({ "streamerId": id });

    if (streamer) {
        return NextResponse.json({ data: streamer }, { status: 200 })
    } else {
        return NextResponse.json({ error: 'Steamer not found' }, { status: 404 })
    };
}