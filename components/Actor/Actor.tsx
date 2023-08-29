import Image from 'next/image';
import Link from 'next/link';

import styles from './Actor.module.scss';

interface ActorInt {
    item: {
        id: number,
        photo: string,
        name: string,
    }
}

function Actor({ item }: ActorInt) {
    
    return (
        <Link href={'#'} className={styles['actor']}>
            <div className={styles['actor__img']} >
                <img src={item.photo} alt="" />
            </div>
            <p className={styles['actor__text']}>{item.name}</p>
        </Link>
    );
}

export default Actor;