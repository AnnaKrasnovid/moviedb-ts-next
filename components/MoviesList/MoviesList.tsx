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

import styles from './MoviesList.module.scss';

interface MoviesListInt {
  list: any,
  pages?: number
}

function MoviesList({ list, pages }: MoviesListInt) {
  const { back } = useRouter();
  const [renderList, setRenderList] = useState(list);
  const [page, setPage] = useState<number>(1);
  const [pagesFilters, setPagesFilters]= useState(pages);
  const [requestData, setRequestData] = useState({ genre: '', years: '', rating: '', movieType: '' });

  function filtersMovies(genre: string, years: string, rating: string, movieType: string) {    
    setRequestData({ genre: genre, years: years, rating: rating, movieType: movieType });
    getfiltersMovies(genre,years,rating,movieType);
  }

  async function getfiltersMovies(genre: string, years: string, rating: string, movieType: string) {
    try {     
      if (genre !== requestData.genre || years !== requestData.years || rating !== requestData.rating) {
        const response = await api.filtersMovies(genre, years, rating, movieType, 1);
        setRenderList(response.docs);
        setPagesFilters(response.pages);
        
        console.log('response 1', page)
      } else {
        const response = await api.filtersMovies(genre, years, rating, movieType, page);
        setRenderList([...renderList, ...response.docs]);
        setPagesFilters(response.pages);
        console.log('response 2',page)        
      }     
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    if(page!==1) {
      getfiltersMovies(requestData.genre, requestData.years, requestData.rating, requestData.movieType);      
    }   
  },[page])

  useEffect(()=> {
    setPage(1)    
  },[requestData])

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
