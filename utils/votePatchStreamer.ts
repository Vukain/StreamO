export const voteStreamer = async (streamerId: number, score: number) => {
  try {
    const apiUrl = `/api/streamers/${streamerId}/vote`;
    await fetch(apiUrl, {
      method: 'PATCH',
      body: JSON.stringify({ score }),
    });
  } catch (error) {
    console.error(error);
  }
};
