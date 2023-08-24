import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';

import Submenu from '../Submenu/Submenu';

import { menu } from '../../settings/menuList';
import { MenuItemInt } from '../../settings/interfaces';

 import styles from './Navigation.module.scss';

type NavigationTypes = 'header' | 'menu';

interface NavigationInt {
  type: NavigationTypes,
  onClosePopup: () => void
}

function Navigation({ type, onClosePopup }: NavigationInt) {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  const setActive = ({ isActive }: any) => isActive ? 'link-menu link-menu_active' : 'link-menu';
  const { pathname } = useRouter();
  // const isActive = exact ? pathname === href : pathname.startsWith(href);

  const closeSubmenu = () => setIsActiveSubmenu(false);
  const openSubmenu = () => setIsActiveSubmenu(true);

  const getMenuList = (item: MenuItemInt) => {
    if (item.submenu) {
      return (
        <li className={styles['navigation__box-link']} key={item.id} onMouseOver={openSubmenu} onMouseOut={closeSubmenu}>
          <Link href={item.path} className={''} onClick={onClosePopup}>
            {item.title}
            {item.submenu && (
              <svg className={`${styles['navigation__arrow']} ${isActiveSubmenu ? `${styles['navigation__arrow_active']} ` : ''}`}
                width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" strokeWidth="2" />
              </svg>
            )}
          </Link>
          <Submenu item={item} isActiveSubmenu={isActiveSubmenu} />
        </li>
      );
    } else {
      return (
        <li className={styles['navigation__box-link']} key={item.id} >
          <Link href={item.path} className={''} onClick={onClosePopup}>
            {item.title}
          </Link>
        </li>
      );
    }
  };

  return (
    <nav className={`${styles['navigation']} ${styles[`navigation_type_${type}`]}`} >
      <ul className={`${styles['navigation__list']} ${styles['navigation__list_type_popup']}`} >
        {menu.map(item => getMenuList(item))}
      </ul>
    </nav>
  );
}

export default Navigation;
