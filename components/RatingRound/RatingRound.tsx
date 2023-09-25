// import  { useState } from 'react';

import { getRoundNumber } from '../../tools/utils';

import styles from './RatingRound.module.scss';

interface RatingRoundInt {
    number: number,
    type?: string,
}

function RatingRound({ number, type = '' }: RatingRoundInt) {
    return (
        <div className={`${styles['rating']} ${styles[`rating_type_${type}`]}`}>
            <span className={styles['rating__estimation']}>{getRoundNumber(number)}</span>
        </div>
    );
}

export default RatingRound;