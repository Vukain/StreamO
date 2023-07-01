export const voteStreamer = async (streamerId: number, score: number) => {
  try {
    const apiUrl = `/api/streamers/${streamerId}/vote`;
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      body: JSON.stringify({ score }),
    });
    if (!response) throw Error;
  } catch (error) {
    console.error(error);
  }
};
