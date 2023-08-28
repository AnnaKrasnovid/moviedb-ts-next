import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

import InputSearch from '../../UI/InputSearch/InputSearch';

import { useDebounce } from '../../hooks/useDebounce';
import api from '../../tools/api';
import { routes } from '../../settings/routes';
import { MoviesContext } from '../../context/MoviesContext';
import { API_KEY } from '../../settings/constants';
import styles from './SearchForm.module.scss';

function SearchForm() {
  const router = useRouter();
  const {moviesList, setMoviesList}= useContext(MoviesContext);
  // const [movieSearch, setMovieSearch] = useState<Array<any>>();
  const [searchValue, setSearchValue] = useState('');

  const res = useDebounce(async () => {
    try {
      const response = await api.searchMovie(searchValue)
      // console.log(response)
      setMoviesList(response.docs)
      router.push(routes.MOVIES)
    }
    catch (error) {
      console.log(error)
    }
  }, 500) 

  useEffect(() => {
    if (searchValue.length > 0) {
      res()
    }

  }, [searchValue])
  // console.log(moviesList)

  return (
    <form className={styles['search']} noValidate>
      <InputSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </form>
  );
}

export default SearchForm;
