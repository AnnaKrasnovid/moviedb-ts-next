import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Rating from '../Rating/Rating';
import RatingRound from '../RatingRound/RatingRound';
import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';
import DescriptionMovie from '../DescriptionMovie/DescriptionMovie';

import { getTime, getInfo, getMoviesType } from '../../tools/utils';

import styles from './DescriptionMovieCard.module.scss';
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
          <img className={styles['about-movie__img']} src={movie.poster?.url || `https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`} alt='Постер к фильму' />
          <div className={styles['about-movie__ratings']}>
            {movie.rating.kp > 0 && <RatingRound number={movie.rating.kp} />}
            {movie.rating.imdb > 0 && <RatingRound number={movie.rating.imdb} type='yellow' />}
          </div>
        </div>
        <div className={styles['about-movie__container']}>
          <h3 className={styles['about-movie__title']}>{movie.name} {movie.year && (movie.year)}</h3>
          {movie.alternativeName !== null ? <p className={styles['about-movie__title-en']}>{movie.alternativeName} {movie.year && (movie.year)}</p> : <></>}
          <ul className={styles['about-movie__box-main']}>
            {movie.type === 'tv-series' ? (
              movie.seriesLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.seriesLength)} />
            ) : (
              movie.movieLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            )}

            {movie.movieLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.seriesLength)} />}
            {movie.year && <DescriptionMovieItem title='Год выпускa' info={movie.year} />}
            {movie.countries && <DescriptionMovieItem title='Страна' info={getInfo(movie.countries)} />}
            {movie.genres && <DescriptionMovieItem title='Жанр' info={getInfo(movie.genres)} />}
            {movie.persons && <DescriptionMovieItem title='Актеры' info={getActors(movie.persons)} />}
          </ul>
          <DescriptionMovie
            title={`О чем фильм “${movie.name} ${movie.year ? (movie.year) : ''}”`}
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
