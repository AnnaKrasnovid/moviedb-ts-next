import React, { useEffect, useState,useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Filters from '../Filters/Filters';
import Loader from '../../UI/Loader/Loader';
import Information from '../../UI/Information/Information';
import MoviesList from '../MoviesList/MoviesList';

import api from '../../tools/api';
import { getMoviesType } from '../../tools/utils';
import { MOVIES_LIMIT } from '../../settings/constants';
import { MovieBaseInt, MoviesListInt } from '../../settings/interfaces';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import styles from './Movies.module.scss';

function Movies({ list, pages }: MoviesListInt) {
  const {pathname} = useRouter();
  const filters = useSelector((state: any) => state.filters);
  const [renderList, setRenderList] = useState<Array<MovieBaseInt>>(list);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>(pages);
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);

  async function getfiltersMovies() {
    const genreFilter = filters.genre ? `genres.name=${filters.genre}` : '';
    const yearFilter = filters.years ? `year=${filters.years}` : '';
    const ratingFilter = filters.rating ? `rating.kp=${filters.rating}` : '';
    const movieType = `type=${getMoviesType(pathname)}`;

    try {
      const response = await api.filtersMovies(genreFilter, yearFilter, ratingFilter, movieType, currentPage * MOVIES_LIMIT);
      setRenderList(response.docs);
      setTotalPages(response.pages);
    } catch (err) {
      console.error(err);
    }
  }

  function changePage() {
    setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    if (currentPage !== 1) {
      getfiltersMovies();
    }
  }, [currentPage])

  useEffect(() => {
    if (filters.genre || filters.years || filters.rating) {
      getfiltersMovies();
    }
  }, [filters])
  
  return (
    <section className={`movies ${styles['movies']}`} >
      <Filters />
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