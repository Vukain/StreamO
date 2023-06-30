export const getStreamerId = (url: string): number => {

    const regex = /streamers[\/](\d+)/;
    const id = parseInt(url.match(regex)![1]);

    return id;
}