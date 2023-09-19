// import  { useState } from 'react';

import { getRoundNumber } from '../../tools/utils';

 import styles from './RatingRound.module.scss';

// interface RatingRoundInt{
//     number: number,
//     className: string,
// title: string
// }

function RatingRound({ number, type = '', title }:any) {

    return (
        <div className={`${styles['rating']} ${styles[`rating_type_${type}`]}`}>
            <span className={styles['rating__estimation']}>{getRoundNumber(number)}</span>
            <span className={styles['rating__owner']}>{title}</span>
        </div>
    );
}

export default RatingRound;