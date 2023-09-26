import { GridMoviesInt } from '../../settings/interfaces';

import styles from './GridMovies.module.scss';

function GridMovies({ children }: GridMoviesInt) {
    return (
        <ul className={styles['grid-movies']}>
            {children}
        </ul>
    )
}

export default GridMovies;