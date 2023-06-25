import styles from './LoadingSpinner.module.sass';

export const LoadingSpinner: React.FC = () => {

    return (
        <>
            <div className={styles.spinner}><div></div><div></div><div></div><div></div></div>
            <div className={styles.text}>Loading Streamers...</div>
        </>
    );
}; 