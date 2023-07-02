type Id = number | null;

export const fetchStreamers = async (id?: Id) => {
  const apiUrl = id ? `/api/streamers/${id}` : '/api/streamers';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
    const streamers = await response.json();
    return streamers.data;
  } catch (error) {
    console.error(error);
  }
};
