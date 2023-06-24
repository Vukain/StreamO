import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";
import type { NextRequest } from 'next/server';
import type { ObjectId } from 'mongodb';

export const GET = async (req: NextRequest) => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const streamers = await db.collection("streamers").find({}).toArray();

    return NextResponse.json(streamers);
}

export const POST = async (request: NextRequest) => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const body = await request.json()

    const newStreamer = { _id: Date.now() as unknown as ObjectId, name: body.name }
    await db.collection("streamers").insertOne(newStreamer);

    return NextResponse.json({ message: `Streamer ${body.name} Added` });

    // return new Response('ok')
}