import { useContext } from 'react';
import Head from 'next/head';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MenuMobile from '@/components/MenuMobile/MenuMobile';
import Overlay from '@/UI/Overlay/Overlay';
import SearchForm from '@/components/SearchForm/SearchForm';
import Tooltip from '@/components/Tooltip/Tooltip';

import { TooltipContext } from '@/context/TooltipContext';
import { ModalsContext } from '@/context/ModalsContext';
import { LayoutInt } from '@/settings/interfaces';

import styles from './Layout.module.scss';

function Layout({ children }: LayoutInt) {
  const { openMenu, closePopup, isOpenPopupMenu, isOpenPopupSearch } = useContext(ModalsContext);
  const { isOpenTooltip, textError } = useContext(TooltipContext);

  return (
    <>
      <Head>
        <meta lang='ru' />
        <meta charSet="UTF-8" />
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
        <Overlay isOpenPopup={isOpenPopupSearch} >
          <SearchForm />
        </Overlay>
        <Tooltip isOpenTooltip={isOpenTooltip} text={textError}/>
      </div>
    </>
  );
}

export default Layout;
