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
  const { pathname, query } = useRouter();
  const [renderList, setRenderList] = useState<Array<MovieBaseInt>>(list);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>(pages);
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);

  async function getfiltersMovies() {
    const genreFilter = query.genre ? `genres.name=${query.genre}` : '';
    const yearFilter = query.year ? `year=${query.year}` : '';
    const ratingFilter = query.rating ? `rating.kp=${query.rating}` : '';
    const movieType = `type=${getMoviesType(pathname)}`;

    try {
      const response = await api.filtersMovies(genreFilter, yearFilter, ratingFilter, movieType, currentPage * MOVIES_LIMIT);
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
    if (!checkEmptyObject(query)) {
      getfiltersMovies();
    } else if (currentPage > 1 && checkEmptyObject(query)) {
      getfiltersMovies();
    }
  }, [query, currentPage])

  useEffect(() => {
    if (currentPage !== 1 && checkEmptyObject(query)) {
      setCurrentPage(1);
    }
  }, [query])

  return (
    <section className={`movies ${styles['movies']}`} >
      <Filters />
      {renderList ? (
        renderList.length > 0 ? (
          <>
           <MoviesList list={renderList}/>
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