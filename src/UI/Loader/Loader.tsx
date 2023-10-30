import styles from './Loader.module.scss';

function Loader() {
    return (
        <div className={styles['loader-box']}> 
            <div className={styles['loader']} role="loader"></div>
        </div>

    )
}

export default Loader;