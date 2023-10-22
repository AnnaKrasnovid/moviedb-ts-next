import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// import {store} from '../store/index';
import { wrapper } from '../store/index';

import { ModalsContext } from '../context/ModalsContext';
import { TooltipContext } from '../context/TooltipContext';

import 'normalize.css';
import 'swiper/css/bundle';
import '../styles/index.scss';

 function App({ Component, pageProps }: AppProps) {//...rest
  // const { store, props } = wrapper.useWrappedStore(rest);
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
    // <Provider store={store}>
      <TooltipContext.Provider value={tooltipContextProps}>
        <ModalsContext.Provider value={modalsContextProps}>
          <Component {...pageProps} />
        </ModalsContext.Provider>
      </TooltipContext.Provider>
    // </Provider>
  )
}


export default wrapper.withRedux(App);