import React, { useState, useEffect } from 'react';

import Submenu from '../Submenu/Submenu';
import NavigationLink from '../NavigationLink/NavigationLink';

import { menu } from '../../settings/menuList';
import { MenuItemInt, NavigationInt } from '../../settings/interfaces';

import styles from './Navigation.module.scss';

function Navigation({ type, onClosePopup }: NavigationInt) {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);

  const closeSubmenu = () => setIsActiveSubmenu(false);
  const openSubmenu = () => setIsActiveSubmenu(true);

  const getMenuList = (item: MenuItemInt) => {
    if (item.submenu) {
      return (
        <li className={styles['navigation__box-link']} key={item.id} onMouseOver={openSubmenu} onMouseOut={closeSubmenu}>
          <NavigationLink item={item} isActiveSubmenu={isActiveSubmenu} closePopup={onClosePopup} />
          <Submenu item={item} isActiveSubmenu={isActiveSubmenu} />
        </li>
      );
    } else {
      return (
        <li className={styles['navigation__box-link']} key={item.id} >
          <NavigationLink item={item} isActiveSubmenu={isActiveSubmenu} closePopup={onClosePopup} />
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
