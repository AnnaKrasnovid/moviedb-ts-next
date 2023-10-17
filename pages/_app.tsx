import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ModalsContext } from '../context/ModalsContext';
import { TooltipContext } from '../context/TooltipContext';

import 'normalize.css';
import 'swiper/css/bundle';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);
  const [isOpenPopupSearch, setIsOpenPopupSearch] = useState(false);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [textError, setTextError] = useState('Что-то пошло не так...');

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
    if (isOpenPopupSearch) {
      setIsOpenPopupSearch(false);
    }
  }

  const modalsContextProps = {
    closePopup: closePopup,
    openMenu: openMenu,
    isOpenPopupMenu: isOpenPopupMenu,
    openPopupSearch: openPopupSearch,
    isOpenPopupSearch: isOpenPopupSearch,
    closePopupSearch: closePopupSearch
  }

  const tooltipContextProps = {
    isOpenTooltip: isOpenTooltip,
    setIsOpenTooltip: setIsOpenTooltip,
    textError: textError,
    setTextError: setTextError
  }

  return (
    <TooltipContext.Provider value={tooltipContextProps}>
      <ModalsContext.Provider value={modalsContextProps}>
        <Component {...pageProps} />
      </ModalsContext.Provider>
    </TooltipContext.Provider>
  )
}
