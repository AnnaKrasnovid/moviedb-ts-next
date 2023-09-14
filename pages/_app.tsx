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
    // setIsOpenPopupSearch: setIsOpenPopupSearch,
    closePopupSearch:closePopupSearch
  }

  const moviesContextProps = {
    moviesList: moviesList,
    setMoviesList: setMoviesList,
    // isSearchMovie: isSearchMovie,
    // setIsSearchMovie: setIsSearchMovie,
  }

  return (
    <ModalsContext.Provider value={modalsContextProps}>
      <MoviesContext.Provider value={moviesContextProps}>
        <Component {...pageProps} />
      </MoviesContext.Provider>
    </ModalsContext.Provider>
  )
}
