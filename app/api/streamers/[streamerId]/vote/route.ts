import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { connectToMongo } from '@/utils/connectToMongo';
import { getStreamerId } from '@/utils/getStreamerId';

export const PUT = async (request: NextRequest) => {

    const db = await connectToMongo();
    const id = getStreamerId(request.url);

    // const body = await request.json()

    const streamer = await db.collection("streamers").updateOne({ "streamerId": id }, { $inc: { score: 1 } });

    if (streamer.modifiedCount != 0) {
        return NextResponse.json({ message: 'Streamer updated.' }, { status: 201 });
    } else {
        return NextResponse.json({ error: 'Streamer not found.' }, { status: 404 });
    };
}

export const PATCH = async (request: NextRequest) => {

    const db = await connectToMongo();
    const id = getStreamerId(request.url);

    const body = await request.json()
    const streamer = await db.collection("streamers").updateOne({ "streamerId": id }, { $inc: { score: body.score } });

    if (streamer.modifiedCount != 0) {
        return NextResponse.json({ message: 'Streamer updated.' }, { status: 201 });
    } else {
        return NextResponse.json({ error: 'Streamer not found.' }, { status: 404 });
    };
}