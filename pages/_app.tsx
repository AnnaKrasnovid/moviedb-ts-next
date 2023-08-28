import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ModalsContext } from '../context/ModalsContext';
import { MoviesContext } from '../context/MoviesContext';

import 'normalize.css';
import 'swiper/css/bundle';
import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState(false);
  const [moviesList, setMoviesList] = useState<Array<any>>([]);

  function openMenu() {
    setIsOpenPopupMenu(true);
  }

  function closePopup() {
    setIsOpenPopupMenu(false);
  }

  const modalsContextProps = {
    closePopup: closePopup,
    openMenu: openMenu,
    isOpenPopupMenu: isOpenPopupMenu
  }

  const moviesContextProps = {
    moviesList: moviesList,
    setMoviesList: setMoviesList,
  }

  return (
    <ModalsContext.Provider value={modalsContextProps}>
      <MoviesContext.Provider value={moviesContextProps}>
        <Component {...pageProps} />
      </MoviesContext.Provider>
    </ModalsContext.Provider>
  )
}
