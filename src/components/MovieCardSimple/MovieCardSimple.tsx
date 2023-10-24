import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { routes } from '@/settings/routes';
import { MovieSemilarItemInt } from '@/settings/interfaces';

import styles from './MovieCardSimple.module.scss';

function MovieCardSimple({ item }: { item: MovieSemilarItemInt }) {
    return (
        <Link href={`${routes.MOVIE}/${item.id}`} className={`link ${styles['semilar-movie']}`}>
            <Image
                src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${item.id}.jpg`}
                alt={`Постер: ${item.name || item.alternativeName}`}
                height={50}
                width={50}
                quality={100}
            />
        </Link>
    );
}

export default MovieCardSimple;