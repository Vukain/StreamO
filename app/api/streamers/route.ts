import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";
import type { NextRequest } from 'next/server';
import type { ObjectId } from 'mongodb';

export const GET = async () => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const streamers = await db.collection("streamers").find({}).toArray();
    return NextResponse.json(streamers);
}

export const POST = async (request: NextRequest) => {
    const client = await clientPromise;
    const db = client.db("streamo");

    // console.log(request.body)

    const newStreamer = { _id: Date.now() as unknown as ObjectId, name: 'test post' }
    await db.collection("streamers").insertOne(newStreamer);

    return NextResponse.json({ message: `Streamer ${newStreamer.name} Added`, body: request.body });
}