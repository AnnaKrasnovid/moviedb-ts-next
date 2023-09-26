import React from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import MovieCard from '../MovieCard/MovieCard';
import Loader from '../../UI/Loader/Loader';
import Carousel from '../Carousel/Carousel';

import { routes } from '../../settings/routes';
import { CompilationInt } from '../../settings/interfaces';

import styles from './Compilation.module.scss';

function Compilation({ title, moviesList, link }: CompilationInt) {
  console.log(moviesList)
  return (
    <section className={styles['compilation']}>
      <h2 className='subtitle'>
        <Link href={link} className='link'>
          {title}
        </Link>
      </h2>
      <div className={styles['compilation__movies']}>
        {moviesList ? (
          <Carousel loop={false} className="compilation-swiper">
            {moviesList && moviesList.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`${routes.MOVIE}/${item.id}`} className='link link-card'>
                  <MovieCard item={item} />
                </Link>
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          <Loader />
        )
        }
      </div>
    </section>
  );
}

export default Compilation;
