import React, { useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import SocialButtons from '../SocialButtons/SocialButtons';
import ScrollBar from '../../UI/ScrollBar/ScrollBar';
import Logo from '../Logo/Logo';
import ButtonClose from '../../UI/ButtonClose/ButtonClose';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { hideScroll } from '../../tools/utils';
import { MenuMobileInt } from '../../settings/interfaces';

import styles from './MenuMobile.module.scss';

function MenuMobile({ onClosePopup, isOpenPopupMenu }: MenuMobileInt) {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 768) {
      onClosePopup();
    }
  }, [isOpenPopupMenu, windowWidth]);

  useEffect(() => {
    hideScroll(isOpenPopupMenu);
  }, [isOpenPopupMenu]);

  return (
    <div className={`${styles['menu-mobile']} ${isOpenPopupMenu ? styles['menu-mobile_opened'] : ''}`} >
      <div className={styles['menu-mobile__box']}>
        <Logo type='menu' />
        <ButtonClose callback={onClosePopup} position='right'/>        
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
