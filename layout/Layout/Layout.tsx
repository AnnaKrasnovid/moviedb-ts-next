import { useContext, ReactNode } from 'react';
import Head from 'next/head';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MenuMobile from '../../components/MenuMobile/MenuMobile';

import { ModalsContext } from '../../context/ModalsContext';

import styles from './Layout.module.scss';

interface LayoutInt {
  children: ReactNode,
}

function Layout({ children }: LayoutInt) {
  const { openMenu, closePopup, isOpenPopupMenu } = useContext(ModalsContext);

  return (
    <>
      <Head>
        <title>MovieDB</title>
        <meta name="description" content="Сайт для поиска фильмов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='page'>
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

        <MenuMobile
          onClosePopup={closePopup}
          isOpenPopupMenu={isOpenPopupMenu}
        />
      </div>
    </>
  );
}

export default Layout;
