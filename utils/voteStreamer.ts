type Id = number | null;

export const voteStreamer = async (id: Id, value?: number) => {

    try {
        const apiUrl = `/api/streamers/${id}/vote`;

        const response = await fetch(apiUrl, {
            method: 'PATCH',
            body: JSON.stringify({ score: 2 })
        });
        if (!response) throw Error
    } catch (error) {
        console.error(error)
    };
};