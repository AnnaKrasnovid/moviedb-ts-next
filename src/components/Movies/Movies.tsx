import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Filters from '@/components/Filters/Filters';
import Loader from '@/UI/Loader/Loader';
import Information from '@/UI/Information/Information';
import MoviesList from '@/components/MoviesList/MoviesList';

import api from '../../tools/api';
import { getMoviesType } from '../../tools/utils';
import { getQueryParams } from '../../tools/utils';
import { MOVIES_LIMIT } from '@/settings/constants';
import { MovieBaseInt, MoviesListInt } from '@/settings/interfaces';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import styles from './Movies.module.scss';

function Movies({ list, pages, error }: MoviesListInt) {
  const router = useRouter();
  const [renderList, setRenderList] = useState<Array<MovieBaseInt>>(list);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(pages || 1);
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);

  async function getfiltersMovies(genre: string, years: string, rating: string) {
    const queryFilters = getQueryParams(genre, years, rating)
    const movieType = `type=${getMoviesType(router.pathname)}`;
    const limit = currentPage * MOVIES_LIMIT

    try {
      const response = await api.filtersMovies(queryFilters, movieType, limit);
      setRenderList(response.docs);
      setTotalPages(response.pages);
    } catch (err) {
      console.error(err)
    }
  }

  function changePage() {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    if (currentPage > 1) {
      const genreFilter = router.query.genre ? router.query.genre : '';
      const yearFilter = router.query.years ? router.query.years : '';
      const ratingFilter = router.query.rating ? router.query.rating : '';
      //@ts-ignore
      getfiltersMovies(genreFilter, yearFilter, ratingFilter);
    }
  }, [currentPage])

  return (
    <section className={`movies ${styles['movies']}`} >
      <Filters callback={getfiltersMovies} />
      {!error
        ? renderList.length > 0
          ? (
            <>
              <MoviesList list={renderList} />
              {(isFetching && currentPage <= totalPages) && <Loader />}
            </>
          )
          : <Information text='Ничего не найдено' />
        : (
          <Information text={`Ошибка: ${error}`} />
        )}
    </section>
  );
}

export default Movies;