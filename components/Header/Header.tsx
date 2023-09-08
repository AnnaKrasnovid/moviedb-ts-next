import { useRouter } from 'next/router';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import ButtonBurger from '../../UI/ButtonBurger/ButtonBurger';

import { routes } from '../../settings/routes';

import styles from './Header.module.scss';
interface HeaderInt {
  onOpenMenu: () => void,
  onClosePopup: () => void
}

function Header({ onOpenMenu, onClosePopup }: HeaderInt) {
  const { pathname } = useRouter()
  
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
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
