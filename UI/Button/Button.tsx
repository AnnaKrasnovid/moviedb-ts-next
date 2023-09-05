import styles from './Button.module.scss';

interface IButton {
    typeButton?: any,
    title: string,   
    callback?: () => void
}

function Button({ typeButton = 'button', title = 'Title',  callback = () => { } }: IButton) {
    return (
        <button className={styles['button-default']} type={typeButton} onClick={callback}>
            {title}
        </button>
    );
}

export default Button;