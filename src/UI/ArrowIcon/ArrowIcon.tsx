import { ArrowIconInt } from '@/settings/interfaces';

import styles from './ArrowIcon.module.scss';

function ArrowIcon({ isActive, type='select' }: ArrowIconInt) {
    return (
        <svg className={`${styles['arrow']} ${isActive ? styles['arrow_active'] : ''} ${type!=='select' ? styles['arrow_type_menu']: ''} `}
            width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" strokeWidth="2" />
        </svg>
    );
}

export default ArrowIcon;