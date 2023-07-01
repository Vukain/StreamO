export const updateStreamer = async (data: Streamer) => {
    try {
        const apiUrl = `/api/streamers/${data.streamerId}/vote`
        const response = await fetch(apiUrl, {
            method: 'PUT',
            body: JSON.stringify(data),
        })
        if (!response) throw Error
    } catch (error) {
        console.error(error)
    }
}
