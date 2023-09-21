import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ModalsContext } from '../context/ModalsContext';

import 'normalize.css';
import 'swiper/css/bundle';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);
  const [isSearchMovie, setIsSearchMovie]= useState(false);
  const [isOpenPopupSearch, setIsOpenPopupSearch] = useState(false);

  function openMenu() {
    setIsOpenPopupMenu(true);
  }
  function openPopupSearch() {
    setIsOpenPopupSearch(true);
  }

  function closePopup() {
    setIsOpenPopupMenu(false);   
  }

  function closePopupSearch() {
    setIsOpenPopupSearch(false);
  }

  const modalsContextProps = {
    closePopup: closePopup,
    openMenu: openMenu,
    isOpenPopupMenu: isOpenPopupMenu,
    openPopupSearch: openPopupSearch,
    isOpenPopupSearch: isOpenPopupSearch,
    closePopupSearch:closePopupSearch
  } 

  return (
    <ModalsContext.Provider value={modalsContextProps}>      
        <Component {...pageProps} />
    </ModalsContext.Provider>
  )
}
