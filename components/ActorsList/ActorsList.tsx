import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import ActorItem from "../ActorItem/ActorItem";
import Carousel from '../Carousel/Carousel';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import styles from './ActorsList.module.scss';

function ActorsList({ list }: any) {
  return (
    <div className={styles['actors']}>
      <p className='subtitle'>Актеры:</p>
      <ul className={styles['actors__list']}>
        <Carousel slides={[8,6,5,3,2]} className="compilation-swiper">
          {list.map((item: any) => (
            <SwiperSlide key={item.id}>
              <ActorItem item={item} />
            </SwiperSlide>
          ))}
        </Carousel>
      </ul>
    </div>
  );
}

export default ActorsList;