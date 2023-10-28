import { ButtonCloseInt } from '@/settings/interfaces';

import styles from './ButtonClose.module.scss';

function ButtonClose({ type = 'button', callback, className, position = 'left' }: ButtonCloseInt) {
    return (
        <button className={`${styles['button-close']} ${position === 'right' ? styles['button-close_right'] : ''} ${className}`} onClick={callback} type={type} />
    );
}

export default ButtonClose;