import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MovieCard from '../MovieCard/MovieCard';
import ButtonText from '../../UI/ButtonText/ButtonText';
import Filters from '../Filters/Filters';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import Loader from '../../UI/Loader/Loader';

import { routes } from '../../settings/routes';
import api from '../../tools/api';
import { getMoviesType } from '../../tools/utils';
import { MOVIES_LIMIT } from '../../settings/constants';

import styles from './MoviesList.module.scss';

interface MoviesListInt {
  list: any,
  pages?: number| undefined
}

function MoviesList({ list, pages }: MoviesListInt) {
  const { pathname, back, query } = useRouter();
  const [renderList, setRenderList] = useState(list);
  const [page, setPage] = useState<number>(1);
  const [pagesFilters, setPagesFilters] = useState<any>(pages);
  const [movieType, setMovieType] = useState(`type=${getMoviesType(pathname)}`);
  const [isFirstRequest, setIsFirstRequest] = useState(true);

  async function getfiltersMovies() {
    const genreFilter = query.genre ? `genres.name=${query.genre}` : '';
    const yearFilter = query.year ? `year=${query.year}` : '';
    const ratingFilter = query.rating ? `rating.kp=${query.rating}` : '';

    const response = await api.filtersMovies(genreFilter, yearFilter, ratingFilter, movieType, page* MOVIES_LIMIT);   
    setRenderList(response.docs);
    setPagesFilters(response.pages);
  }

  function changePage() {
    setPage(page + 1);
  }

  useEffect(() => {
    getfiltersMovies();
  }, [query, page, movieType])

  useEffect(() => {
    setPage(1);
  }, [query])

  return (
    <section className={styles['movies']}>
      {renderList ? (
        renderList.length > 0 ? (
          <>
            <Filters />
            <InfiniteScroll
              condition={pagesFilters===1}
              callback={changePage}
            >
              <ul className={styles['movies__list']}>
                {renderList.length > 0 && renderList.map((item: any) => (
                  <li key={item.id}>
                    <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
                      <MovieCard item={item} />
                    </Link>
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          </>
        ) : (
          <div className={styles['movies__box']}>
            <p className={styles['movies__info']}>Ничего не найдено</p>
            <ButtonText text='Назад' callback={back} />
          </div>
        )
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default MoviesList;
