type Id = number | null;

export const fetchStreamers = async (id?: Id) => {

    const apiUrl = id ? `/api/streamers/${id}` : '/api/streamers'

    const response = await fetch(apiUrl, {
        method: 'GET'
    });

    const streamers = await response.json();

    // console.log(streamers);

    return streamers;
};