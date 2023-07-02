export const updateStreamer = async (data: Streamer) => {
  try {
    const apiUrl = `/api/streamers/${data.streamerId}`;
    await fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};
