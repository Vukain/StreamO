import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export const GET = async () => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const streamers = await db.collection("streamers").find({}).limit(20).toArray();
    // console.log(posts)

    return NextResponse.json(streamers);
}

export const POST = async (request: NextRequest) => {
    const client = await clientPromise;
    const db = client.db("streamo");


    const id = 20 as unknown as ObjectId
    const newStreamer = { _id: id, name: 'test post' }
    const streamers = await db.collection("streamers").insertOne(newStreamer);



    return NextResponse.json({ message: 'Streamer Added' });
}