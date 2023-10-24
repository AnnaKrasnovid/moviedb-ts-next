import React from 'react';
import Image from 'next/image';

import DescriptionMovie from '@/components/DescriptionMovie/DescriptionMovie';
import DescriptionList from '@/components/DescriptionList/DescriptionList';
import RatingBox from '@/components/RatingBox/RatingBox';
import Loader from '@/UI/Loader/Loader';

import { checkEmptyObject } from '../../tools/utils';
import { DescriptionMovieCardInt } from '@/settings/interfaces';

import styles from './DescriptionMovieCard.module.scss';

function DescriptionMovieCard({ movie }: DescriptionMovieCardInt) {
  return (
    <section className={styles['about-movie']}>
      {!checkEmptyObject(movie) ? (
        <div className={styles['about-movie__description']}>
          <div className={styles['about-movie__container']}>
            <Image
              className={styles['about-movie__img']}
              src={movie.poster?.url || `https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`}
              alt='Постер к фильму' width={300} height={500} quality={100}
            />
            <RatingBox movie={movie} />
          </div>
          <div className={styles['about-movie__container']}>
            <h1 className={styles['about-movie__title']}>{movie.name} {movie.year && `(${movie.year})`}</h1>
            {movie.alternativeName !== null ? <p className={styles['about-movie__title-en']}>{movie.alternativeName} {movie.year && `(${movie.year})`}</p> : <></>}
            <DescriptionList movie={movie} />
            {movie.description && (
              <DescriptionMovie
                title={`О чем фильм “${movie.name}” ${movie.year ? `(${movie.year})` : ''}`}
                info={movie.description}
              />
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default DescriptionMovieCard;
