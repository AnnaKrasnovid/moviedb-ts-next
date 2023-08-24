import { ButtonInt } from '../../settings/interfaces';

import styles from './ButtonBurger.module.scss';

function ButtonBurger({ type = 'button', callback }: ButtonInt) {
    return (
        <button className={styles['button-burger']} onClick={callback} type={type}/>
    );
};

export default ButtonBurger;