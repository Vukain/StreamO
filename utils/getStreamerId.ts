import type { ObjectId } from 'mongodb';

export const getStreamerId = (url: string): ObjectId => {

    const regex = /streamers[\/](\d+)/;
    const id = parseInt(url.match(regex)![1]) as unknown as ObjectId;

    return id
}