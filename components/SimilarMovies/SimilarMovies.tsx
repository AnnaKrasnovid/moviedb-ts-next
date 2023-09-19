import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import ActorItem from "../ActorItem/ActorItem";

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { routes } from '../../settings/routes';

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
    list: Array<SimilarMovieInt>
}

function SimilarMovies({ list }: SimilarMoviesInt) {
    const windowWidth = useWindowWidth();
    const [slides, setSlides] = useState(0);

    function getNumberSlides() {
        if (windowWidth > 1365) {
            setSlides(6);
        } else if (windowWidth > 1023) {
            setSlides(5);
        } else if (windowWidth > 767) {
            setSlides(3);
        } else if (windowWidth > 500) {
            setSlides(2);
        } else if (windowWidth > 320) {
            setSlides(2);
        }
    }

    useEffect(() => {
        getNumberSlides();
    }, [windowWidth]);

    return (
        <div className={styles['semilar-movies']}>
            <p className='subtitle'>Похожее:</p>
            <ul className={styles['semilar-movies__list']}>
                <Swiper
                    slidesPerView={slides}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    watchOverflow={true}
                >
                    {list.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <Link href={`${routes.MOVIE}/${item.id}`} className={`link ${styles['semilar-movie']}`}>                                
                                <img src={item.poster.url} alt={`Постер: ${item.name}`} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ul>
        </div>
    );
}

export default SimilarMovies;