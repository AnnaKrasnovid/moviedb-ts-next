import { useEffect, useState, useContext } from 'react';

import InputSearch from '../../UI/InputSearch/InputSearch';
import ButtonClose from '../../UI/ButtonClose/ButtonClose';
import Information from '../../UI/Information/Information';
import MoviesList from '../MoviesList/MoviesList';

import api from '../../tools/api';
import { useDebounce } from '../../hooks/useDebounce';
import { ModalsContext } from '../../context/ModalsContext';
import { MovieBaseInt } from '../../settings/interfaces';

import styles from './SearchForm.module.scss';

function SearchForm() {
  const { openPopupSearch, closePopupSearch } = useContext(ModalsContext);
  const [searchValue, setSearchValue] = useState('');
  const [moviesList, setMoviesList] = useState<Array<MovieBaseInt>>([]);
  const [textResult, setTextResult] = useState<string>('');

  const searchMovie = useDebounce(async () => {
    try {
      const response = await api.searchMovie(searchValue);
      setMoviesList(response.docs);
      setTextResult(response.docs.length > 0 ? '' : 'Ничего не найдено');
    }
    catch (error) {
      console.error(error);
    }
  }, 1000)

  const closePopup = () => {
    closePopupSearch();
    setTextResult('');
    setMoviesList([]);
    setSearchValue('');
  }

  useEffect(() => {
    if (searchValue.length > 0) {
      searchMovie();
    }
  }, [searchValue])

  return (
    <section className={styles['section-search']}>
      <ButtonClose callback={closePopup} className={styles['section-search-button']} />
      <div className={styles['search']} onClick={openPopupSearch}>
        <InputSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {moviesList.length > 0 ? (
        <MoviesList list={moviesList} />
      ) : (
        <Information text={textResult} />
      )}
    </section >
  );
}

export default SearchForm;
