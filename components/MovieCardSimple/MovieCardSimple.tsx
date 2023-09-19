import React from 'react';
import Link from 'next/link';

import { routes } from '../../settings/routes';

import styles from './MovieCardSimple.module.scss';

function MovieCardSimple({ item }: any) {
    return (
        <Link href={`${routes.MOVIE}/${item.id}`} className={`link ${styles['semilar-movie']}`}>
            <img src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item.id}.jpg`} alt={`Постер: ${item.name || item.alternativeName}`} />
        </Link>
    );
}

export default MovieCardSimple;