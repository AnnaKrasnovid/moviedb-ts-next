import { ButtonInt } from '../../settings/interfaces';

import styles from './ButtonClose.module.scss';

function ButtonClose({ type = 'button', callback, className }: ButtonInt) {
    return (
        <button className={`${styles['button-close']} ${className}`} onClick={callback} type={type} />
    );
}

export default ButtonClose;