import React from 'react';
import Image from 'next/image';

import RatingRound from '../RatingRound/RatingRound';
import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';
import DescriptionMovie from '../DescriptionMovie/DescriptionMovie';
import Loader from '../../UI/Loader/Loader';

import { getTime, getInfo } from '../../tools/utils';
import {  ActorSimpleItemInt, DescriptionMovieCardInt } from '../../settings/interfaces';

import styles from './DescriptionMovieCard.module.scss';

function DescriptionMovieCard({ movie }: DescriptionMovieCardInt) {

  function getActors(list: Array<ActorSimpleItemInt>) {
    if (list) {
      let actors: Array<string> = [];
      list.map((i: ActorSimpleItemInt) => i.profession === 'актеры' ? actors.push(i.name) : '');
      return actors.join(", ");
    }
  }

  return (
    <section className={styles['about-movie']}>
      <div className={styles['about-movie__description']}>
        <div className={styles['about-movie__container']}>
          <Image
            className={styles['about-movie__img']}
            src={movie.poster?.url || `https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`}
            alt='Постер к фильму'
            width={300}
            height={500}
            quality={100}
          />
          <div className={styles['about-movie__ratings']}>
            {movie.rating?.kp > 0 && <RatingRound number={movie.rating.kp} />}
            {movie.rating?.imdb > 0 && <RatingRound number={movie.rating.imdb} type='yellow' />}
          </div>
        </div>
        <div className={styles['about-movie__container']}>
          <h3 className={styles['about-movie__title']}>{movie.name} {movie.year && `(${movie.year})`}</h3>
          {movie.alternativeName !== null ? <p className={styles['about-movie__title-en']}>{movie.alternativeName} {movie.year && `(${movie.year})`}</p> : <></>}
          <ul className={styles['about-movie__box-main']}>
            {movie.type === 'tv-series' ? (
              movie.seriesLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.seriesLength)} />
            ) : (
              movie.movieLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            )}
            {movie.year && <DescriptionMovieItem title='Год выпускa' info={movie.year} />}
            {movie.countries && <DescriptionMovieItem title='Страна' info={getInfo(movie.countries)} />}
            {movie.genres && <DescriptionMovieItem title='Жанр' info={getInfo(movie.genres)} />}
            {movie.persons && <DescriptionMovieItem title='Актеры' info={getActors(movie.persons)} />}
          </ul>
          {movie.description && <DescriptionMovie
            title={`О чем фильм “${movie.name}” ${movie.year ? `(${movie.year})` : ''}`}
            info={movie.description}
          />}
        </div>
      </div>     
    </section>
  );
}

export default DescriptionMovieCard;
