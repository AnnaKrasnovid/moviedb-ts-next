import React from 'react';

import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';

import { getTime, getInfo, getActors } from '../../tools/utils';
import { DescriptionMovieCardInt } from '../../settings/interfaces';

import styles from './DescriptionList.module.scss';

function DescriptionList({ movie }: DescriptionMovieCardInt) {
    return (
        <ul className={styles['movie-list']}>
            {movie.type === 'tv-series' &&(movie.seriesLength ||movie.movieLength)  ? (
                movie.seriesLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.seriesLength)} />
            ) : (
                movie.movieLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            )}
            {movie.year && <DescriptionMovieItem title='Год выпускa' info={movie.year} />}
            {movie.countries && <DescriptionMovieItem title='Страна' info={getInfo(movie.countries)} />}
            {movie.genres && <DescriptionMovieItem title='Жанр' info={getInfo(movie.genres)} />}
            {movie.persons && <DescriptionMovieItem title='Актеры' info={getActors(movie.persons)} />}
        </ul>
    );
}

export default DescriptionList;