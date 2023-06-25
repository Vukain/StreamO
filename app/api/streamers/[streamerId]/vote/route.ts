import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { connectToMongo } from '@/utils/connectToMongo';
import { getStreamerId } from '@/utils/getStreamerId';

export const PUT = async (request: NextRequest) => {

    const db = await connectToMongo();
    const id = getStreamerId(request.url);

    const body = await request.json()



    const streamer = await db.collection("streamers").updateOne({ "_id": id }, { $inc: { score: 1 } });

    if (streamer) {
        return NextResponse.json(streamer);
    } else {
        return NextResponse.json({ error: 'Steamer not found' }, { status: 404 })
    }
}