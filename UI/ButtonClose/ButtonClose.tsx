import { ButtonInt } from '../../settings/interfaces';

import styles from './ButtonClose.module.scss';

function ButtonClose({ type = 'button', callback }: ButtonInt) {
    return (
        <button className={styles['button-close']} onClick={callback} type={type} />
    );
}

export default ButtonClose;