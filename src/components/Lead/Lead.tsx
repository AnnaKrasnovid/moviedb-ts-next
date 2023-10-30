import React from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import Carousel from '@/components/Carousel/Carousel';
import Banner from '../Banner/Banner';

import { routes } from '@/settings/routes';
import { movies } from '@/assets/appData/movies';

import styles from './Lead.module.scss';

function Lead() {
  return (
    <Carousel slides={1} className={styles['section-lead']} navigation={true} autoplay={true}>
      {movies.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={`${routes.MOVIE}/${item.id}`}>
            <Banner image={item.backdrop.url} logo={item.logo.url}/>            
          </Link>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}

export default Lead;
