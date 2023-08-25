import { ButtonTextInt } from '../../settings/interfaces';

import styles from './ButtonText.module.scss';

function ButtonText({ type = 'button', text = '', callback }: ButtonTextInt) {
    return (
        <button type={type} onClick={callback} className={`${styles['button-text']} hover`}>{text}</button>
    );
};

export default ButtonText;