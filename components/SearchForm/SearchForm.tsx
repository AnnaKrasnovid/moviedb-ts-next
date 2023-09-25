import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';

import InputSearch from '../../UI/InputSearch/InputSearch';
import MovieCard from '../MovieCard/MovieCard';
import ButtonClose from '../../UI/ButtonClose/ButtonClose';
import GridMovies from '../GridMovies/GridMovies';

import { useDebounce } from '../../hooks/useDebounce';
import api from '../../tools/api';
import { routes } from '../../settings/routes';
import { ModalsContext } from '../../context/ModalsContext';
import { MovieBaseInt } from '../../settings/interfaces';
import styles from './SearchForm.module.scss';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const { openPopupSearch, closePopupSearch } = useContext(ModalsContext)
  const [moviesList, setMoviesList] = useState<Array<MovieBaseInt>>([]);
  const [textResult, setTextResult] = useState<string>('');

  const searchMovie = useDebounce(async () => {
    try {
      const response = await api.searchMovie(searchValue);
      setMoviesList(response.docs);
      response.docs.length > 0 ? setTextResult('ничего не найдено') : ''
    }
    catch (error) {
      console.log(error);
    }
  }, 1000)

  useEffect(() => {
    if (searchValue.length > 0) {
      searchMovie();
    }
  }, [searchValue])

  return (
    <section className={styles['section-search']}>
      <ButtonClose callback={closePopupSearch} className={styles['section-search-button']} />
      <form className={styles['search']} noValidate onClick={openPopupSearch}>
        <InputSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </form>
      {moviesList.length > 0 ? (
        <GridMovies>
          {moviesList.map((item: any) => (
            <li key={item.id} onClick={closePopupSearch}>
              <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
                <MovieCard item={item} />
              </Link>
            </li>
          ))}
        </GridMovies>
      ) : (
        <p>{textResult}</p>
      )}
    </section >
  );
}

export default SearchForm;
