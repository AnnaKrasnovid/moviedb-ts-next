import Link from "next/link";
import { useRouter } from 'next/router';

import ArrowIcon from "@/UI/ArrowIcon/ArrowIcon";

import { NavigationLinkInt } from '@/settings/interfaces';

import styles from './NavigationLink.module.scss';

function NavigationLink({ item, isActiveSubmenu, closePopup }: NavigationLinkInt) {
    const { pathname } = useRouter();
    const isActiveLink = pathname === item.path;
    
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