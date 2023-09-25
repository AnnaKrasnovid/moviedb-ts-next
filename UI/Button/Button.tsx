import styles from './Button.module.scss';
import { ButtonTextInt } from '../../settings/interfaces';

function Button({ type = 'button', text = 'Title',  callback = () => { }, className }: ButtonTextInt) {
    return (
        <button className={`${styles['button-default']} ${className}`} type={type} onClick={callback}>
            {text}
        </button>
    );
}

export default Button;