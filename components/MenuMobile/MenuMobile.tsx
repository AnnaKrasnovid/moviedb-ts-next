import React, { useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import SocialButtons from '../SocialButtons/SocialButtons';
import ScrollBar from '../../UI/ScrollBar/ScrollBar';
import Logo from '../Logo/Logo';

import {useWindowWidth} from '../../hooks/useWindowWidth';
import { hideScroll } from '../../tools/utils';

import styles from './MenuMobile.module.scss';

interface MenuMobileInt {
  onClosePopup: () => void,
  isOpenPopupMenu: boolean,
}

function MenuMobile({ onClosePopup, isOpenPopupMenu }: MenuMobileInt) {
  const sizeWindow = useWindowWidth();

  useEffect(() => {
    if (sizeWindow > 768) {
      onClosePopup();
    }
  }, [isOpenPopupMenu, sizeWindow]);

  useEffect(() => {
    hideScroll(isOpenPopupMenu);
  }, [isOpenPopupMenu]);

  return (
    <div className={`${styles['menu-mobile']} ${isOpenPopupMenu ? styles['menu-mobile_opened'] : ''}`} >
      <div className={styles['menu-mobile__box']}>
        <Logo type='menu' />
        <button className={styles['menu-mobile__button-close']} onClick={onClosePopup} type="button" />
      </div>
      <div className={styles['menu-mobile__box-nav']}>
        <ScrollBar>
          <Navigation type='menu' onClosePopup={onClosePopup} />
        </ScrollBar>
        <SocialButtons type='menu' />
      </div>
    </div>
  );
}

export default MenuMobile;
