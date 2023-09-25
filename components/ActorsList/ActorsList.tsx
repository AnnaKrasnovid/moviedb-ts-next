import React from 'react';
import { SwiperSlide } from 'swiper/react';

import ActorItem from "../ActorItem/ActorItem";
import Carousel from '../Carousel/Carousel';

import { ActorsListInt,ActorSimpleItemInt } from '../../settings/interfaces';

import styles from './ActorsList.module.scss';

function ActorsList({ list }: ActorsListInt) {
  return (
    <div className={styles['actors']}>
      <p className='subtitle'>Актеры:</p>
      <ul className={styles['actors__list']}>
        <Carousel slides={[8,6,5,3,2]} className="compilation-swiper">
          {list.map((item: ActorSimpleItemInt) => (
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