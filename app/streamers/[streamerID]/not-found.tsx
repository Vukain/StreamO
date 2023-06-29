import styles from './page.module.sass'

const StreamerNotFound = () => {
    return (
        <main className={styles.main}>
            <p className={styles.not_found}>404: streamer not found...</p>
        </main>
    )
};

export default StreamerNotFound;