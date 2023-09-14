import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import InputSearch from '../../UI/InputSearch/InputSearch';
import MoviesList from '../MoviesList/MoviesList';
import MovieCard from '../MovieCard/MovieCard';
import ButtonClose from '../../UI/ButtonClose/ButtonClose';

import { useDebounce } from '../../hooks/useDebounce';
import api from '../../tools/api';
import { routes } from '../../settings/routes';
import { MoviesContext } from '../../context/MoviesContext';
import { ModalsContext } from '../../context/ModalsContext';
import { API_KEY } from '../../settings/constants';
import styles from './SearchForm.module.scss';

function SearchForm() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const { openPopupSearch, closePopupSearch } = useContext(ModalsContext)
  const [moviesList, setMoviesList] = useState<any>([]);

  const searchMovie = useDebounce(async () => {
    try {
      const response = await api.searchMovie(searchValue);
      setMoviesList(response.docs);
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

  useEffect(() => {
    console.log('moviesList', moviesList)
  }, [searchValue])

  return (
    <section className={styles['section-search']}>
      <ButtonClose callback={closePopupSearch} />
      <form className={styles['search']} noValidate onClick={openPopupSearch}>
        <InputSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </form>
      {moviesList.length > 0 ? (
        <ul className={styles['section-search__list']}>
          {moviesList.map((item: any) => (
            <li key={item.id}>
              <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
                <MovieCard item={item} type='small' />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        searchValue && <p>Ничего не найдено</p>
      )}
    </section >
  );
}

export default SearchForm;
