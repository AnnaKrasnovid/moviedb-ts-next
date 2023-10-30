import React from 'react';

import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';

import { getActors } from '@/helpers/getActors/getActors';
import { getTime } from '@/helpers/getTime/getTime';
import { getInfo } from '@/helpers/getInfo/getInfo';
import { DescriptionMovieCardInt } from '@/settings/interfaces';

import styles from './DescriptionList.module.scss';

function DescriptionList({ movie }: DescriptionMovieCardInt) {

    const movieType = movie.type !== 'tv-series'
    const descriptions = [
        {
            title: 'Продолжительность',
            info: movieType ? movie.year : movie.seriesLength,
            text: movieType ? getTime(movie.movieLength) : getTime(movie.seriesLength)
        },
        { title: 'Страна', info: movie.countries, text: getInfo(movie.countries) },
        { title: 'Жанр', info: movie.genres, text: getInfo(movie.genres) },
        { title: 'Актеры', info: movie.persons, text: getActors(movie.persons) },
    ]

    return (
        <ul className={styles['movie-list']}>
            {descriptions.map((item) => (
                item.info && <DescriptionMovieItem title={item.title} info={item.text} key={item.title} />
            ))}
        </ul>
    );
}

export default DescriptionList;