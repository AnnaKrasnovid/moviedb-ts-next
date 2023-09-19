import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ActorItem from "../ActorItem/ActorItem";

import { useWindowWidth } from '../../hooks/useWindowWidth';

import styles from './ActorsList.module.scss';

function ActorsList({ list }: any) {
  const windowWidth = useWindowWidth();
  const [slides, setSlides] = useState(0);

  function getNumberSlides() {
    if (windowWidth > 1365) {
      setSlides(8);
    } else if (windowWidth > 1023) {
      setSlides(6);
    } else if (windowWidth > 767) {
      setSlides(5);
    } else if (windowWidth > 500) {
      setSlides(3);
    } else if (windowWidth > 320) {
      setSlides(2);
    }
  }
  
  useEffect(() => {
    getNumberSlides();
  }, [windowWidth]);

  return (
    <ul className={styles['actors']}>   
      <Swiper
        slidesPerView={slides}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        watchOverflow={true}
        className="compilation-swiper"
      >
        {list.map((item: any) => (
          <SwiperSlide key={item.id}>            
              <ActorItem item={item} />            
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}

export default ActorsList;