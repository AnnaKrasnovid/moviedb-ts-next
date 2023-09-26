import { useContext } from 'react';


import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ButtonBurger from '../../UI/ButtonBurger/ButtonBurger';
import InputSearch from '../../UI/InputSearch/InputSearch';

import { ModalsContext } from '../../context/ModalsContext';
import { HeaderInt } from '../../settings/interfaces';

import styles from './Header.module.scss';

function Header({ onOpenMenu, onClosePopup }: HeaderInt) {  
  const { openPopupSearch } = useContext(ModalsContext);

  return (
    <header className={styles['header']}>
      <div className={styles['header__content']}>
        <div className={styles['header__wrapper']}>
          <Logo type='header' />
          <div className={styles['header__box']}>
            <ButtonBurger callback={onOpenMenu} />
            <Navigation type='header' onClosePopup={onClosePopup} />
          </div>
        </div>
        <div className={styles['search']} onClick={openPopupSearch}>
          <InputSearch searchValue={''} setSearchValue={() => { }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
