import Link from "next/link";
import { useRouter } from 'next/router';
import { MenuItemInt } from '../../settings/interfaces';

import styles from './NavigationLink.module.scss';

interface NavigationLinkInt {
    item: MenuItemInt,
    isActiveSubmenu: boolean,
    closePopup: () => void,
}

function NavigationLink({ item, isActiveSubmenu, closePopup }: NavigationLinkInt) {
    const { asPath } = useRouter();
    const isActiveLink = `/${asPath.split('/')[1]}` === item.path;

    return (
        <Link href={item.path} className={`${styles['link-menu']} ${isActiveLink ? styles['link-menu_active'] : ''}`} onClick={closePopup}>
            {item.title}
            {item.submenu && (
                <svg className={`${styles['arrow']} ${isActiveSubmenu ? styles['arrow_active'] : ''}`}
                    width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" strokeWidth="2" />
                </svg>
            )}
        </Link>
    );
}

export default NavigationLink;