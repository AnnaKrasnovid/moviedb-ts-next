import Link from "next/link";
import { useRouter } from 'next/router';
import { MenuItemInt } from '../../settings/interfaces';
import ArrowIcon from "../../UI/ArrowIcon/ArrowIcon";

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
                <ArrowIcon type='menu' isActive={isActiveSubmenu} />
            )}
        </Link>
    );
}

export default NavigationLink;