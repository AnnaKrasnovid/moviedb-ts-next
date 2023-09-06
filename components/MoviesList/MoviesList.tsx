import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MovieCard from '../MovieCard/MovieCard';
import Select from '../../UI/Select/Select';
import ButtonText from '../../UI/ButtonText/ButtonText';
import Filters from '../Filters/Filters';

import { submenuGenres } from '../../settings/menuList';
import { routes } from '../../settings/routes';
import api from '../../tools/api';

import styles from './MoviesList.module.scss';

function MoviesList({ list }: any) {
  const { asPath, back } = useRouter();
  const [renderList, setRenderList] = useState(list)

  async function filtersMovies(genre: string, years: string, rating: string) {
    try {
      const response = await api.getMoviesByGenre(genre, years, rating)
      console.log(response.docs)
      setRenderList(response.docs)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={styles['movies']}>
      {list.length > 0 ? (
        <>
          <Filters callback={filtersMovies} />
          <ul className={styles['movies__list']}>
            {renderList.length >0&& renderList.map((item: any) => (
              <li key={item.id}>
                <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
                  <MovieCard item={item} />
                </Link>
              </li>
            ))}
          </ul>
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
