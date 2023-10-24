import { getRoundNumber } from '../../tools/utils';
import { RatingRoundInt } from '@/settings/interfaces';

import styles from './RatingRound.module.scss';

function RatingRound({ number, type = 'orange' }: RatingRoundInt) {
    return (
        <div className={`${styles['rating']} ${styles[`rating_type_${type}`]}`}>
            <span className={styles['rating__estimation']}>{getRoundNumber(number)}</span>
        </div>
    );
}

export default RatingRound;