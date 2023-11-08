import React from 'react';

import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';

import { getActors } from '@/helpers/getActors/getActors';
import { getTime } from '@/helpers/getTime/getTime';
import { getInfo } from '@/helpers/getInfo/getInfo';
import { DescriptionMovieCardInt } from '@/settings/interfaces';

import styles from './DescriptionList.module.scss';

function DescriptionList({ movie }: DescriptionMovieCardInt) {
    const movieType = movie.type !== 'tv-series';
    const movieLength = movieType ? getTime(movie.movieLength) : getTime(movie.seriesLength);

    return (
        <ul className={styles['movie-list']}>
            {movieLength &&
                <DescriptionMovieItem
                    title='Продолжительность'
                    info={movieLength}
                />
            }
            {movie.year &&
                <DescriptionMovieItem
                    title='Год выпускa'
                    info={movie.year}
                />
            }
            {movie.countries.length > 0 &&
                <DescriptionMovieItem
                    title='Страна'
                    info={getInfo(movie.countries)}
                />
            }
            {movie.genres.length > 0 &&
                <DescriptionMovieItem
                    title='Жанр'
                    info={getInfo(movie.genres)}
                />
            }
            {movie.persons.length > 0 &&
                <DescriptionMovieItem title='Актеры'
                    info={getActors(movie.persons)}
                />
            }
        </ul>
    );
}

export default DescriptionList;