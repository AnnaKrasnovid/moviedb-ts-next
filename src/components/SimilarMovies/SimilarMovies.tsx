import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MovieCardSimple from '@/components/MovieCardSimple/MovieCardSimple';
import Carousel from '@/components/Carousel/Carousel';
import Subtitle from '@/components/Subtitle/Subtitle';

import { SimilarMoviesInt, MovieSemilarItemInt } from '@/settings/interfaces';

import styles from './SimilarMovies.module.scss';

function SimilarMovies({ list }: SimilarMoviesInt) {
    return (
        <>
            {list.length > 0 && (
                <div className={styles['semilar-movies']}>
                    <Subtitle text='Похожее:' />
                    <div className={styles['semilar-movies__list']}>
                        <Carousel loop={false}>
                            {list.map((item: MovieSemilarItemInt) => (
                                <SwiperSlide key={item.id}>
                                    <MovieCardSimple item={item} />
                                </SwiperSlide>
                            ))}
                        </Carousel>
                    </div>
                </div >
            )}
        </>

    );
}

export default SimilarMovies;