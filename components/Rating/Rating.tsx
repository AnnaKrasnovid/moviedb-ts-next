import React, { useState } from 'react';

import { getRoundNumber } from '../../tools/utils';

import styles from './Rating.module.scss';

type RatingRoundTypes = 'yellow' | 'orange';

interface RatingRoundInt {
    number: number,
    type: RatingRoundTypes,
}

function Rating({ number, type }: RatingRoundInt) {
    return (
        <div className={styles['box-rating']}>
            <span className={`${styles['box-rating__rating-icon']} ${styles[`box-rating__rating-icon_bg_${type}`]}`}></span>
            <span className={`${styles['box-rating__rating-mark']} ${styles[`box-rating__rating-mark_bg_${type}`]}`}>{getRoundNumber(number)}</span>
        </div>
    );
}

export default Rating;