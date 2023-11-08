import { ErrorInt } from '@/settings/interfaces';

import styles from './Error.module.scss';

function Error({text}:ErrorInt) {    
    return (
        <span className={styles['error']}>{text}</span>
    )
}

export default Error;