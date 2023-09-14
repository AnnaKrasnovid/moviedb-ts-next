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
  const [requestData, setRequestData] = useState({ genre: '', years: '', rating: '' });
  const [movieType, setMovieType] = useState('type=movie');

  function filtersMovies(genre: string, years: string, rating: string) {
    setRequestData({ genre: genre, years: years, rating: rating });
    getfiltersMovies(genre, years, rating);
  }

  async function getfiltersMovies(genre: string, years: string, rating: string) {
    // console.log(genre===requestData.genre)
    console.log(genre, requestData.genre)
    try {
      // if(genre!==requestData.genre) {
      //   const response = await api.filtersMovies(genre, years, rating, movieType, 1);
      //   setRenderList(response.docs);
      //   setPagesFilters(response.pages);
      //   console.log(1)
      // }
      // else 
      if (genre !== requestData.genre || years !== requestData.years || rating !== requestData.rating) {
        const response = await api.filtersMovies(genre, years, rating, movieType, 1);
        setRenderList(response.docs);
        setPagesFilters(response.pages);
        console.log(2)
      } else if (page !== 1) {
        console.log(3)
        const response = await api.filtersMovies(genre, years, rating, movieType, page);
        setRenderList([...renderList, ...response.docs]);
        setPagesFilters(response.pages);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // if (page !== 1) {
    getfiltersMovies(requestData.genre, requestData.years, requestData.rating);
    // }
    // const data = JSON.stringify({ genre: requestData.genre, years: requestData.years, rating: requestData.rating })
    // localStorage.setItem('movies', JSON.stringify(renderList));
    // localStorage.setItem('filters', data);
  }, [page, query.genre])

  useEffect(() => {
    setPage(1)
  }, [requestData])

  useEffect(() => {
    const movieType = `type=${getMoviesType(pathname)}`;
    setMovieType(movieType)
  }, [])
  console.log(pathname)
  return (
    <section className={styles['movies']}>
      {renderList ? (
        renderList.length > 0 ? (
          <>
            <Filters callback={filtersMovies} />
            <InfiniteScroll
              page={page}
              setPage={setPage}
              pages={pagesFilters}
            // callback={() => getfiltersMovies(requestData.genre, requestData.years, requestData.rating, requestData.movieType)}
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
