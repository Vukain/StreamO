export const postStreamer = async (data: Streamer) => {
    try {
        const response = await fetch('/api/streamers', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        if (!response) throw Error
    } catch (error) {
        console.error('error')
    }
}
