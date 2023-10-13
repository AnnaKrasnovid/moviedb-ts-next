import React from 'react';

import RatingRound from '../RatingRound/RatingRound';
import { DescriptionMovieCardInt } from '../../settings/interfaces';

import styles from './RatingBox.module.scss';

function RatingBox({ movie }: DescriptionMovieCardInt) {
    return (
        <div className={styles['rating-box']}>
            {movie.rating?.kp > 0 && <RatingRound number={movie.rating.kp} />}
            {movie.rating?.imdb > 0 && <RatingRound number={movie.rating.imdb} type='yellow' />}
        </div>
    );
}

export default RatingBox;
