import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MovieCardSimple from '../MovieCardSimple/MovieCardSimple';
import Carousel from '../Carousel/Carousel';
import { SimilarMoviesInt,MovieSemilarItemInt } from '../../settings/interfaces';

import styles from './SimilarMovies.module.scss';



function SimilarMovies({ list }: SimilarMoviesInt) {
    console.log(list)
    return (
        <div className={styles['semilar-movies']}>
            <p className='subtitle'>Похожее:</p>
            <div className={styles['semilar-movies__list']}>
                <Carousel >
                    {list.map((item: MovieSemilarItemInt) => (
                        <SwiperSlide key={item.id}>
                            <MovieCardSimple item={item} />
                        </SwiperSlide>
                    ))}
                </Carousel>
            </div>
        </div >
    );
}

export default SimilarMovies;