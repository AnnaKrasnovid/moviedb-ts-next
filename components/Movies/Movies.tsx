import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import Filters from '../Filters/Filters';
import Loader from '../../UI/Loader/Loader';
import Information from '../../UI/Information/Information';
import MoviesList from '../MoviesList/MoviesList';

import { getMoviesType } from '../../tools/utils';
import { MOVIES_LIMIT } from '../../settings/constants';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useFiltersMoviesQuery } from '../../services/MoviesApi';

import styles from './Movies.module.scss';

function Movies() {
  const router = useRouter();
  const movieType = `type=${getMoviesType(router.pathname)}`;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>(1);
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);
  const { data, isLoading, isError } = useFiltersMoviesQuery(filters());

  function filters() {
    const genre = router.query.genre ? `genres.name=${router.query.genre}` : '';
    const years = router.query.years ? `year=${router.query.years}` : 'year=2000-2023';
    const rating = router.query.rating ? `rating.kp=${router.query.rating}` : 'rating.kp=7-10';
    const limit = currentPage * MOVIES_LIMIT;

    return { genre, years, rating, movieType, limit }
  }

  function changePage() {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalPages(data.pages)
    }
  }, [data])

  useEffect(() => {
    setCurrentPage(1)
  }, [router.query])

  return (
    <section className={`movies ${styles['movies']}`} >
      <Filters />
      {!isError
        ? isLoading
          ? <Loader />
          : (data.docs.length > 0
            ? (
              <>
                <MoviesList list={data.docs} />
                {(isFetching && currentPage <= totalPages) && <Loader />}
              </>
            )
            : <Information text='Ничего не найдено' />)
        : <Information text='Что-то-пошло не так...' />}
    </section>
  );
}

export default Movies;