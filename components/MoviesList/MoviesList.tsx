import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import MovieCard from '../MovieCard/MovieCard';
import Select from '../../UI/Select/Select';
import ButtonText from '../../UI/ButtonText/ButtonText';

import { submenuGenres } from '../../settings/menuList';

import styles from './MoviesList.module.scss';

function MoviesList({ list }: any) {
  const { asPath, back } = useRouter();
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState<string>('')
  const [years, setYears] = useState<string>('')
  const [rating, setRaiting] = useState<string>('')
  const [sort, setSort] = useState<string>('')

  const selectGenresList = [
    { id: '0', title: 'Все', value: '' },
    { id: '1', title: 'Боевик', value: 'боевик' },
    { id: '2', title: 'Военный', value: 'военный' },
    { id: '3', title: 'Детектив', value: 'детектив' },
    { id: '4', title: 'Семейный', value: 'семейный' },
    { id: '5', title: 'Драма', value: 'драма' },
    { id: '6', title: 'Комедия', value: 'комедия' },
    { id: '7', title: 'Криминал', value: 'криминал' },
    { id: '8', title: 'Мелодрама', value: 'мелодрама' },
    { id: '9', title: 'Триллер', value: 'триллер' },
    { id: '10', title: 'Ужасы', value: 'ужасы' },
    { id: '11', title: 'Фантастика', value: 'фантастика' },
    { id: '12', title: 'Фэнтези', value: 'фэнтези' },
  ]

  const selectYearsList = [
    { id: '0', title: 'Все годы', value: '' },
    { id: '1', title: '2022-2023', value: '' },
    { id: '2', title: '2020-2021', value: '' },
    { id: '3', title: '2010-2019', value: '' },
    { id: '4', title: '2000-2009', value: '' },
    { id: '5', title: '1990-1999', value: '' },
    { id: '6', title: '1980-1989', value: '' },
    { id: '7', title: '1970-1979', value: '' },
    { id: '8', title: '1960-1969', value: '' },
    { id: '9', title: 'до 1960', value: '' },
  ]

  const selectRatingList = [
    { id: '0', title: 'Любой рейтинг', value: '' },
    { id: '1', title: 'Больше 9', value: '' },
    { id: '2', title: 'Больше 8', value: '' },
    { id: '3', title: 'Больше 7', value: '' },
    { id: '4', title: 'Больше 6', value: '' },
    { id: '5', title: 'Больше 5', value: '' },
  ]

  const selectSortList = [
    { id: '0', title: 'Рекомендуемые', value: '-' },
    { id: '1', title: 'По рейтингу', value: '' },
    { id: '2', title: 'По дате выхода', value: '' },
  ]

  return (
    <section className={styles['movies']}>
      {list.length > 0 ? (
        <>
          <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} placeholder='Жанры' defaultValue={selectGenresList[0].title} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} placeholder='Рейтинг' defaultValue={selectYearsList[0].title} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} placeholder='Годы выхода' defaultValue={selectRatingList[0].title} />
            {/* <Select options={selectSortList} callback={(value) => setSort(value)} placeholder='Рекомендуемые' defaultValue={selectSortList[0].title} /> */}
          </div>
          <ul className={styles['movies__list']}>
            {list.map((item: any) => (
              <li key={item.id}>
                <Link href={`/movie/${item.id}`} className='link'>
                  <MovieCard item={item} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div  className={styles['movies__box']}>
          <p className={styles['movies__info']}>Ничего не найдено</p>
          <ButtonText text='Назад' callback={back} />
        </div>

      )}
    </section>
  );
}

export default MoviesList;
