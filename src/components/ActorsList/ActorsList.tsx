import React from 'react';
import { SwiperSlide } from 'swiper/react';

import ActorItem from '@/components/ActorItem/ActorItem';
import Carousel from '@/components/Carousel/Carousel';
import Subtitle from '@/components/Subtitle/Subtitle';

import { ActorsListInt, ActorSimpleItemInt } from '@/settings/interfaces';

import styles from './ActorsList.module.scss';

function ActorsList({ list }: ActorsListInt) {
  return (
    <>
      {list.length > 0 && (
        <div className={styles['actors']} data-testid='actors-list'>
          <Subtitle text='Актеры:' />
          <ul className={styles['actors__list']}>
            <Carousel slides={[8, 6, 5, 3, 2]} className="compilation-swiper" loop={false}>
              {list.map((item: ActorSimpleItemInt) => (
                <SwiperSlide key={item.id}>
                  <ActorItem item={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          </ul>
        </div>
      )}
    </>
  );
}

export default ActorsList;