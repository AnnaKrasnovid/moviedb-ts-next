import { ReactNode } from 'react';

import styles from './GridMovies.module.scss';

interface GridMoviesInt {
    children: ReactNode
}

function GridMovies({ children }: GridMoviesInt) {
    return (
        <ul className={styles['grid-movies']}>
            {children}
        </ul>
    )
}

export default GridMovies;