import React, { useState } from 'react';
import Image from 'next/image';
import Rating from '../Rating/Rating';
import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';
import DescriptionMovie from '../DescriptionMovie/DescriptionMovie';

import { getTime, getInfo } from '../../tools/utils';

import styles from './DescriptionMovieCard.module.scss';
import { MovieInt } from '../../settings/interfaces';

interface DescriptionMovieCardInt {
  movie: any
}

interface ActorInt {
  id: number,
  name: string,
  photo: string,
  profession: string
}

function DescriptionMovieCard({ movie }: DescriptionMovieCardInt) {
  const [isShowAllText, setIsShowAllText] = useState<boolean>(false);

  function toggleAllText() {
    setIsShowAllText(!isShowAllText);
  }

  function getActors(list: Array<ActorInt>) {
    if (list) {
      let actors: Array<string> = [];
      list.map((i: ActorInt) => i.profession === 'актеры' ? actors.push(i.name) : '');
      return actors.join(", ");
    }
  }

  return (
    <section className={styles['about-movie']}>
      <div className={styles['about-movie__description']}>
        <div className={styles['about-movie__container']}>
          <img className={styles['about-movie__img']} src={movie.poster.url} alt='Постер к фильму' />
          <div className={styles['about-movie__container-rating']}>
            <Rating number={movie.rating.kp} type='orange' />
            {movie.rating.imdb > 0 && (
              <Rating number={movie.rating.imdb} type='yellow' />
            )}
          </div>
        </div>
        <div className={styles['about-movie__container']}>
          <h3 className={styles['about-movie__title']}>{movie.name} ({movie.year})</h3>
          {movie.alternativeName!==null? <p className={styles['about-movie__title-en']}>{movie.alternativeName} ({movie.year})</p> : <></>}
          <ul className={styles['about-movie__box-main']}>
            <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            <DescriptionMovieItem title='Год выпускa' info={movie.year} />
            <DescriptionMovieItem title='Страна' info={getInfo(movie.countries)} />
            <DescriptionMovieItem title='Жанр' info={getInfo(movie.genres)} />
            <DescriptionMovieItem title='Актеры' info={getActors(movie.persons)} />
          </ul>
          <DescriptionMovie
            title={`О чем фильм “${movie.name} (${movie.year})”`}
            info={isShowAllText ? movie.description : movie.shortDescription}
            buttonText={!isShowAllText ? 'Ещё' : 'Скрыть'}
            callback={toggleAllText}
          />
        </div>
      </div>
    </section>
  );
}

export default DescriptionMovieCard;
