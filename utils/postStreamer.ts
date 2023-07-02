export const postStreamer = async (data: Streamer) => {
  try {
    await fetch('/api/streamers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('error');
  }
};
