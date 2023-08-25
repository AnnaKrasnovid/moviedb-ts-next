import styles from './Error.module.scss';

function Error({text=''}) {    
    return (
        <span className={styles['error']}>{text}</span>
    )
}

export default Error;