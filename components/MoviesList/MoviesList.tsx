import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MovieCard from '../MovieCard/MovieCard';
import Select from '../../UI/Select/Select';
import ButtonText from '../../UI/ButtonText/ButtonText';
import Filters from '../Filters/Filters';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

import { submenuGenres } from '../../settings/menuList';
import { routes } from '../../settings/routes';
import api from '../../tools/api';

import styles from './MoviesList.module.scss';

interface MoviesListInt {
  list: any,
  pages?: number
}

function MoviesList({ list, pages }: MoviesListInt) {
  const { asPath, back } = useRouter();
  const [renderList, setRenderList] = useState(list);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1)
  const [requestData, setRequestData] = useState({ genre: '', years: '', rating: '', movieType: '' })

  function filtersMovies(genre: string, years: string, rating: string, movieType: string) {
    setRequestData({ genre: genre, years: years, rating: rating, movieType: movieType })
    getfiltersMovies(genre, years, rating, movieType, page)
  }

  async function getfiltersMovies(genre: string, years: string, rating: string, movieType: string, page: number) {
    try {
      const response = await api.filtersMovies(genre, years, rating, movieType, page)
      setRenderList([...renderList, ...response.docs])
    }
    catch (error) {
      console.log(error)
    }
  }

  // function handleScrollPage() {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight
  //     ) {
  //       return;
  //     }
  //     setLoading(true);
  //     setPage(page + 1);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight
  //     ) {
  //       return;
  //     }
  //     setLoading(true);

  //     // console.log(page)
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [])

  // useEffect(() => {

  //   if (!loading) { return };
  //   if (page === pages) { setLoading(false) }
  //   setTimeout(() => {
  //     setPage(page + 1);
  //     getfiltersMovies(requestData.genre, requestData.years, requestData.rating, requestData.movieType, page)
  //     setLoading(false);
  //   }, 500);
  // }, [loading]);



  return (
    <section className={styles['movies']}>
      {list.length > 0 ? (
        <>
          <Filters callback={filtersMovies} />
          <InfiniteScroll page={page} setPage={setPage} pages={pages}
          callback={()=> getfiltersMovies(requestData.genre, requestData.years, requestData.rating, requestData.movieType, page)}
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
          {/* {loading && <p>Идет загрузка ...</p>} */}
        </>
      ) : (
        <div className={styles['movies__box']}>
          <p className={styles['movies__info']}>Ничего не найдено</p>
          <ButtonText text='Назад' callback={back} />
        </div>
      )}
    </section>
  );
}

export default MoviesList;
