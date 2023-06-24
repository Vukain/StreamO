export const fetchStreamers = async () => {
    const response = await fetch('/api/streamers', {
        method: 'GET'
    });

    const streamers = await response.json();

    console.log(streamers);

    return streamers;
};