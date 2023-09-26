import Link from 'next/link';

import { routes } from '../../settings/routes';
import { GenreCardInt } from '../../settings/interfaces';

import styles from './GenreCard.module.scss'; 

function GenreCard({ item, index }: GenreCardInt) {
    return (
        <Link href={`${routes.GENRES}/${item.value}`} className={`${styles['genre-item']} ${styles[`genre-item_bg_${index}`]}`} >
            <h3 className={styles['genre-item__title']}>{item.title}</h3>
        </Link>
    );
}

export default GenreCard;