import React from 'react';
import { SwiperSlide } from 'swiper/react';

import MovieCardSimple from '../MovieCardSimple/MovieCardSimple';
import Carousel from '../Carousel/Carousel';

import styles from './SimilarMovies.module.scss';

interface SimilarMovieInt {
    alternativeName: string,
    enName: string | null,
    id: number,
    name: string,
    poster: {
        previewUrl: string,
        url: string
    },
    type: string
}

interface SimilarMoviesInt {
    list: Array<any>
}

function SimilarMovies({ list }: SimilarMoviesInt) {
    return (
        <div className={styles['semilar-movies']}>
            <p className='subtitle'>Похожее:</p>
            <div className={styles['semilar-movies__list']}>
                <Carousel >
                    {list.map((item: any) => (
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