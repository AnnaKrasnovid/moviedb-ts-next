import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

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
  const filters = useSelector((state: any) => state.filters)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>(1);
  // const [movieType,setMovieType] = useState<string>('');
  const filtersRedux = useSelector((state: any) => state.filters)
  //  const [filters, setFilters]= useState({genre:'', years:'year=2000-2023', rating:'rating.kp=7-10', movieType:'', limit:MOVIES_LIMIT})
  const [isFetching] = useInfiniteScroll(changePage, totalPages === 1);

   const { data, isLoading, isError, refetch } = useFiltersMoviesQuery({filters});
   
   console.log(data, isError)


  function changePage() {
    setCurrentPage(currentPage + 1);
  }

  // useEffect(() => {
  //   if (!isLoading && !isError) {
  //     setTotalPages(data.pages);
  //   }
  // }, [data])

  useEffect(() => {
    setCurrentPage(1);
  }, [router.query])

  
  useEffect(() => {
    // refetch()
  }, [router.query])

  useEffect(() => {
    // setMovieType(`type=${getMoviesType(router.pathname)}`)
  }, [])

  return (
    <section className={`movies ${styles['movies']}`} >
       <Filters />
      {
      !isError
        ? isLoading
          ? <Loader />
          : 
          (data?.docs.length > 0
            ? (
              <>
                <MoviesList list={data.docs} />
                {(isFetching && currentPage <= totalPages) && <Loader />}
              </>
            )
            : <Information text='Ничего не найдено' />)
        : <Information text='Что-то-пошло не так...' />
      } 
    </section>
  );
}

export default Movies;