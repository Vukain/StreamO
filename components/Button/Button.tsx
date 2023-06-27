import styles from './Modal.module.sass';

type Props = {
    text: string,
    asInput?: boolean
    onClick?: () => void
};

export const Button: React.FC<Props> = ({ text, onClick = () => { }, asInput = false }) => {

    if (asInput) {
        return <input type="submit" value={text} />
    } else {
        return <button type="button" onClick={onClick}>{text}</button>;
    };

};
