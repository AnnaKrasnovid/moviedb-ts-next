import styles from './Button.module.scss';

interface IButton {
    typeButton?: any,
    title: string,   
    callback?: () => void,
    className?: string
}

function Button({ typeButton = 'button', title = 'Title',  callback = () => { }, className }: IButton) {
    return (
        <button className={`${styles['button-default']} ${className}`} type={typeButton} onClick={callback}>
            {title}
        </button>
    );
}

export default Button;