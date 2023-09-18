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

import styles from './MoviesList.module.scss';

interface MoviesListInt {
  list: any,
  pages?: number
}

function MoviesList({ list, pages }: MoviesListInt) {
  const { pathname, back, query } = useRouter();
  const [renderList, setRenderList] = useState(list);
  const [page, setPage] = useState<number>(1);
  const [pagesFilters, setPagesFilters] = useState(pages);
  const [movieType, setMovieType] = useState('type=movie');

  async function getfiltersMovies() {
    const genreFilter = query.genre ? `genres.name=${query.genre}` : '';
    const yearFilter = query.year ? `year=${query.year}` : '';
    const ratingFilter = query.rating ? `rating.kp=${query.rating}` : '';
    setMovieType(`type=${movieType}`)
    const response = await api.filtersMovies(genreFilter, yearFilter, ratingFilter, movieType, page);
    page === 1 ? setRenderList(response.docs) : setRenderList([...renderList, ...response.docs]);
    setPagesFilters(response.pages);
  }

  useEffect(() => {
    getfiltersMovies();
  }, [query, page,movieType])

  useEffect(() => {
    setPage(1);
  }, [query])

  useEffect(() => {
    const movieType = `type=${getMoviesType(pathname)}`;
    setMovieType(movieType)
  }, [pathname,movieType])

  return (
    <section className={styles['movies']}>
      {renderList ? (
        renderList.length > 0 ? (
          <>
            <Filters />
            <InfiniteScroll
              page={page}
              setPage={setPage}
              pages={pagesFilters}
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
