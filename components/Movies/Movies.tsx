import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Filters from '../Filters/Filters';
import Loader from '../../UI/Loader/Loader';
import Information from '../../UI/Information/Information';
import MoviesList from '../MoviesList/MoviesList';

import api from '../../tools/api';
import { getMoviesType } from '../../tools/utils';
import { MOVIES_LIMIT } from '../../settings/constants';
import { checkEmptyObject } from '../../tools/utils';
import { MovieBaseInt, MoviesListInt } from '../../settings/interfaces';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import styles from './Movies.module.scss';

function Movies({ list, pages }: MoviesListInt) {
  const router = useRouter();
  const [renderList, setRenderList] = useState<Array<MovieBaseInt>>(list);
  const [currentPage, setCurrentPage] = useState<number>( 1);
  const [totalPages, setTotalPages] = useState<any>(pages);
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);

  async function getfiltersMovies(genre: string, years: string, rating: string) {
    const genreFilter = genre ? `genres.name=${genre}` : '';
    const yearFilter = years ? `year=${years}` : '';
    const ratingFilter = rating ? `rating.kp=${rating}` : '';
    const movieType = `type=${getMoviesType(router.pathname)}`;
    const limit = currentPage * MOVIES_LIMIT

    try {
      const response = await api.filtersMovies(genreFilter, yearFilter, ratingFilter, movieType, limit);
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
      getfiltersMovies(genreFilter, yearFilter, ratingFilter)
    }
  }, [currentPage])

  return (
    <section className={`movies ${styles['movies']}`} >
      <Filters callback={getfiltersMovies} currentPage={currentPage} />
      {renderList ? (
        renderList.length > 0 ? (
          <>
            <MoviesList list={renderList} />
            {(isFetching && currentPage <= totalPages) && <Loader />}
          </>
        ) : (
          <Information text='Ничего не найдено' />
        )
      ) : (
        <Information text='Что-то-пошло не так...' />
      )}
    </section>
  );
}

export default Movies;