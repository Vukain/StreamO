import { fetchStreamers } from './fetchStreamers'

export const syncStreamers = async (
    setState: React.Dispatch<React.SetStateAction<Streamer[] | null>>
) => {
    try {
        const data = await fetchStreamers()
        setState(data)
    } catch (error) {
        console.error(error)
    }
}
