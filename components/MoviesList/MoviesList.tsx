import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MovieCard from '../MovieCard/MovieCard';
import ButtonText from '../../UI/ButtonText/ButtonText';
import Filters from '../Filters/Filters';
import Loader from '../../UI/Loader/Loader';
import GridMovies from '../GridMovies/GridMovies';

import { routes } from '../../settings/routes';
import api from '../../tools/api';
import { getMoviesType } from '../../tools/utils';
import { MOVIES_LIMIT } from '../../settings/constants';
import { checkEmptyObject } from '../../tools/utils';
import { MovieBaseInt, MoviesListInt } from '../../settings/interfaces';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

import styles from './MoviesList.module.scss';

function MoviesList({ list, pages }: MoviesListInt) { 
  const { pathname, back, query } = useRouter();
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
            <GridMovies>
              {renderList.length > 0 && renderList.map((item: MovieBaseInt) => (
                <li key={item.id}>
                  <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
                    <MovieCard item={item} />
                  </Link>
                </li>
              ))}
            </GridMovies>
            {(isFetching && currentPage<=totalPages)&& <Loader />}           
          </>
        ) : (
          <div className={styles['movies__box']}>
            <p className={styles['movies__info']}>Ничего не найдено</p>
            <ButtonText text='Назад' callback={back} />
          </div>
        )
      ) : (       
        <p>Что-то-пошло не так...</p>
      )}
    </section>
  );
}

export default MoviesList;
