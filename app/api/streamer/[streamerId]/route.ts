import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from 'mongodb';

export const GET = async (req: NextRequest) => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const regex = /streamer[\/](\d+)/;
    const url = req.url;
    const id = parseInt(url.match(regex)![1]) as unknown as ObjectId
    // alert(s.match(r));

    // console.log(url.match(regex)![1])

    const streamer = await db.collection("streamers").findOne({ "_id": id });

    return NextResponse.json(streamer);
}