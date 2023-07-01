export const updateStreamer = async (data: Streamer) => {
  console.log('updating 222');
  try {
    const apiUrl = `/api/streamers/${data.streamerId}`;
    const response = await fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (!response) throw Error;
  } catch (error) {
    console.error(error);
  }
};
