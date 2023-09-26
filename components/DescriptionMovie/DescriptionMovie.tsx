import ButtonText from '../../UI/ButtonText/ButtonText';

import { DescriptionMovieInt } from '../../settings/interfaces';

import styles from './DescriptionMovie.module.scss';

function DescriptionMovie({ title, info }: DescriptionMovieInt) {
    return (
        <div className={styles['description-movie']}>
            <div>
                <p className={styles['description-movie__title']}>{title}</p>
                <p className={styles['description-movie__info']}>{info}</p>
            </div>
        </div>
    );
}

export default DescriptionMovie;