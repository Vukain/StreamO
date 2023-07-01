import { connectMongoose } from '@/lib/mongoose';
import { StreamerModel } from '@/models/streamerModel';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Context = {
  params: {
    streamerId: string;
  };
};

export const GET = async (request: NextRequest, context: Context) => {
  const { streamerId } = context.params;

  try {
    await connectMongoose();
    const streamer = await StreamerModel.findOne({
      streamerId: parseInt(streamerId),
    });
    if (!streamer) throw Error;
    return NextResponse.json(
      {
        status: 'success',
        message: `streamer ${streamerId} fetched`,
        data: streamer,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 'fail', message: `streamer ${streamerId} not found` }, { status: 404 });
  }
};

export const PUT = async (request: NextRequest, context: Context) => {
  const { streamerId } = context.params;

  try {
    await connectMongoose();
    const body = await request.json();
    const streamer = await StreamerModel.updateOne({ streamerId: parseInt(streamerId) }, body, { new: true });
    if (!streamer) throw Error;
    return NextResponse.json(
      {
        status: 'success',
        message: `streamer ${streamerId} updated`,
        data: streamer,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 'fail', message: `streamer ${streamerId} not found` }, { status: 404 });
  }
};

export const DELETE = async (request: NextRequest, context: Context) => {
  const { streamerId } = context.params;

  try {
    await connectMongoose();
    await StreamerModel.deleteOne({ streamerId: parseInt(streamerId) });
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 'fail', message: `streamer not found` }, { status: 404 });
  }
};
