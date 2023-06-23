import { NextResponse } from 'next/server';
import clientPromise from "../../../lib/mongodb";

export const GET = async () => {
    const client = await clientPromise;
    const db = client.db("streamo");

    const posts = await db.collection("streamers").find({}).limit(20).toArray();
    // console.log(posts)

    return NextResponse.json(posts);
}