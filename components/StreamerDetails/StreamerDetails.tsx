import styles from './StreamerDetailsCard.module.sass';

type Props = {
    data: Streamer,
    syncStreamers: (id: number) => Promise<void>
};

export const StreamerDetails: React.FC<Props> = ({ data: { streamerId, name, description, score, links }, syncStreamers }) => {


    return (
        <article>
        </article>
    );
};