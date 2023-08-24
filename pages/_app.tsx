import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ModalsContext } from '../context/ModalsContext';

import 'normalize.css';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);

  function openMenu() {
    setIsOpenPopupMenu(true);
  }

  function closePopup() {
    setIsOpenPopupMenu(false);
  }

const modalsContextProps= {
  closePopup: closePopup,
  openMenu: openMenu,
}

  return (
    <ModalsContext.Provider value={modalsContextProps}>
      <Component {...pageProps} />
    </ModalsContext.Provider>
  )
}
