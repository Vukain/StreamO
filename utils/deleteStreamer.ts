export const deleteStreamer = async (streamerId: number) => {
  try {
    const apiUrl = `/api/streamers/${streamerId}`;
    fetch(apiUrl, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(error);
  }
};
