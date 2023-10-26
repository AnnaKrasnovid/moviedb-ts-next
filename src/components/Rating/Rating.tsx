import React from 'react';

import {getRoundNumber} from '@/helpers/getRoundNumber/getRoundNumber';
import { RatingRoundInt } from '@/settings/interfaces';

import styles from './Rating.module.scss';

function Rating({ number, type }: RatingRoundInt) {
    return (
        <div className={styles['box-rating']}>
            <span className={`${styles['box-rating__rating-icon']} ${styles[`box-rating__rating-icon_bg_${type}`]}`}></span>
            <span className={`${styles['box-rating__rating-mark']} ${styles[`box-rating__rating-mark_bg_${type}`]}`}>{getRoundNumber(number)}</span>
        </div>
    );
}

export default Rating;