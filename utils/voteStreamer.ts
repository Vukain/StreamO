type Id = number | null;

export const voteStreamer = async (id: Id, value?: number) => {

    const apiUrl = `/api/streamers/${id}/vote`;

    const response = await fetch(apiUrl, {
        method: 'PUT'
    })

    const message = await response.json()
    // console.log(response.status)

    return message;
};