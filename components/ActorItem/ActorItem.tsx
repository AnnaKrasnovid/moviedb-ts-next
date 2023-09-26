import Image from 'next/image';
import Link from 'next/link';

import { routes } from '../../settings/routes';
import { ActorCardInt } from '../../settings/interfaces';

import styles from './ActorItem.module.scss';

function ActorItem({ item }: ActorCardInt) {
    console.log(item)
    return (
        <Link href={`${routes.ACTOR}/${item.id}`} className={styles['actor']}>
            <div className={styles['actor__img']} >
                <img src={item.photo} alt={`Фотография ${item.name}`} />
            </div>
            <p className={styles['actor__text']}>{item.name}</p>
        </Link>
    );
}

export default ActorItem;