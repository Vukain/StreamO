import { connectMongoose } from '@/lib/mongoose';
import { StreamerModel } from '@/models/streamerModel';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
    try {
        await connectMongoose();
        const streamers = await StreamerModel.find({}).sort({ score: -1 });
        return NextResponse.json({ status: 'success', results: streamers.length, data: streamers }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 'fail', message: `streamers not found` }, { status: 404 })
    };
}

export const POST = async (request: NextRequest) => {
    try {
        await connectMongoose();
        const body = await request.json();
        const streamer = StreamerModel.create(body);
        if (!streamer) throw Error;
        return NextResponse.json({ status: 'success', message: `streamer ${body.name} added`, data: streamer }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 'fail', message: `streamer not added` }, { status: 404 })
    };
}