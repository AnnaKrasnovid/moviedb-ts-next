import styles from './Loader.module.scss';

function Loader() {
    return(
        <div className={styles['loader']} role="loader"></div>
    )
}

export default Loader;