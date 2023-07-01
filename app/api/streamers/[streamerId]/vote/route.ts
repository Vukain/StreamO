import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { connectMongoose } from '@/lib/mongoose'
import { StreamerModel } from '@/models/streamerModel'

type Context = {
    params: {
        streamerId: string
    }
}

export const PUT = async (request: NextRequest, context: Context) => {
    const { streamerId } = context.params

    try {
        await connectMongoose()
        const body = await request.json()
        const streamer = await StreamerModel.updateOne(
            { streamerId: parseInt(streamerId) },
            body
        )
        if (!streamer) throw Error
        return NextResponse.json(
            {
                status: 'success',
                message: `streamer ${streamerId} score updated`,
                data: streamer,
            },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { status: 'fail', message: `streamer ${streamerId} not found` },
            { status: 404 }
        )
    }
}

export const PATCH = async (request: NextRequest, context: Context) => {
    const { streamerId } = context.params

    try {
        await connectMongoose()
        const body = await request.json()
        const { score } = body
        const streamer = await StreamerModel.updateOne(
            { streamerId: parseInt(streamerId) },
            { $inc: { score: score } }
        )
        if (!streamer) throw Error
        return NextResponse.json(
            {
                status: 'success',
                message: `streamer ${streamerId} score updated`,
                data: streamer,
            },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { status: 'fail', message: `streamer ${streamerId} not found` },
            { status: 404 }
        )
    }
}
