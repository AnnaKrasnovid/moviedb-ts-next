import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import { Autoplay, Pagination, Navigation } from 'swiper';

import { routes } from '../../settings/routes';
import { movies } from '../../assets/appData/movies';
import { getRoundNumber } from '../../tools/utils';

import styles from './Lead.module.scss';

function Lead() {
  console.log(movies)
  return (
    <Swiper
      loop={true}
      loopedSlides={3}
      // loopAdditionalSlides={3}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1500}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles['section-lead']}
    >
      {movies.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={`${routes.MOVIE}/${item.id}`}>
            <div className={styles['movie-banner']}>
              <Image src={item.backdrop.url} alt='Постер к фильму' className={styles['movie-banner__img']} width={100} height={100} />
              <div className={styles['movie-banner__container']}>
                <div className={styles['movie-banner__logo']}>
                  <img src={item.logo.url} alt='Постер к фильму' width={50} height={20} />
                </div>               
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

  );
}

export default Lead;
