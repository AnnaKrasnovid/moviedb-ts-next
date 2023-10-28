import styles from './Error.module.scss';

interface ErrorInt{
    text: string
}

function Error({text}:ErrorInt) {    
    return (
        <span className={styles['error']}>{text}</span>
    )
}

export default Error;