export const postStreamer = async (data: any) => {

    const response = await fetch('/api/streamers', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    console.log(response.status, JSON.stringify(data));
}