import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import Carousel from '../Carousel/Carousel';

import { routes } from '../../settings/routes';
import { movies } from '../../assets/appData/movies';

import styles from './Lead.module.scss';

function Lead() {
  return (
    <Carousel slides={1} className={styles['section-lead']} navigation={true} autoplay={true}>
      {movies.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={`${routes.MOVIE}/${item.id}`}>
            <div className={styles['movie-banner']}>
              <Image src={item.backdrop.url} alt='Постер к фильму' className={styles['movie-banner__img']} width={100} height={100} quality={100}/>
              <div className={styles['movie-banner__container']}>
                <div className={styles['movie-banner__logo']}>
                  <Image src={item.logo.url} alt='Постер к фильму' width={50} height={20} quality={100}/>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}

export default Lead;
