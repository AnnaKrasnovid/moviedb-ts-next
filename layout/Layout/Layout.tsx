import { useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { ModalsContext } from '../../context/ModalsContext';

 import styles from './Layout.module.css';

interface LayoutInt {
  children: JSX.Element,
}

function Layout({ children }: LayoutInt) {
  const {openMenu, closePopup} = useContext(ModalsContext);

  return (
    <>
      <Header
        onOpenMenu={openMenu}
        onClosePopup={closePopup}
      />
      <div className={styles['main']}>
        <main className={styles['main-page']}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
