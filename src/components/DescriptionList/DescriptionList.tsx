import React from 'react';

import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';

import { getActors } from '@/helpers/getActors/getActors';
import { getTime } from '@/helpers/getTime/getTime';
import { getInfo } from '@/helpers/getInfo/getInfo';
import { DescriptionMovieCardInt } from '@/settings/interfaces';

import styles from './DescriptionList.module.scss';

function DescriptionList({ movie }: DescriptionMovieCardInt) {
    const descriptions = [
        { title: 'Год выпускa', info: movie.year, text: movie.year },
        { title: 'Страна', info: movie.countries, text: getInfo(movie.countries) },
        { title: 'Жанр', info: movie.genres, text: getInfo(movie.genres) },
        { title: 'Актеры', info: movie.persons, text: getActors(movie.persons) },
    ]
console.log(getTime(-100))
    return (
        <ul className={styles['movie-list']}>
            {movie.type === 'tv-series' ? (
                movie.seriesLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.seriesLength)} />
            ) : (
                movie.movieLength && <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            )}
            {descriptions.map((item) => (
                item.info && <DescriptionMovieItem title={item.title} info={item.text} key={item.title} />
            ))}
        </ul>
    );
}

export default DescriptionList;