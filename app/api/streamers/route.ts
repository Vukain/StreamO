import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { ObjectId } from 'mongodb';

import { connectToMongo } from '@/utils/connectToMongo';

export const GET = async (request: NextRequest) => {
    const db = await connectToMongo();

    const streamers = await db.collection("streamers").find({}).sort({ score: -1 }).toArray();

    return NextResponse.json({ results: streamers.length, data: streamers }, { status: 200 });
}

export const POST = async (request: NextRequest) => {
    const db = await connectToMongo();
    const body = await request.json()

    const newStreamer = { ...body }
    await db.collection("streamers").insertOne(newStreamer);

    return NextResponse.json({ message: `Streamer ${body.name} Added` }, { status: 201 });
}