import Image from "next/image";

import DescriptionMovieItem from "../DescriptionMovieItem/DescriptionMovieItem";

import styles from './Actor.module.scss';

function Actor({ actor }: any) {
    const getString = (item: Array<any>) => {
        const array: Array<string> = [];
        item.map((i: any) => array.push(i.value));
        return array.join('/');
    }

    const date = new Date(Date.parse(actor.birthday));
    const birthday = `${date.getDate()}.${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.${date.getFullYear()}`;

    return (
        <div className={styles['page-actor']}>
            <div className={styles['actor-info']}>
                <div className={styles['actor-info__img']}>
                    <Image src={actor.photo} alt="" />
                </div>
                <div className={styles['actor-info__content']}>
                    <h2 className={styles['actor-info__title']}>{actor.name}</h2>
                    <div className={styles['actor-info__wrapper']}>
                        <DescriptionMovieItem title="Карьера:" info={getString(actor.profession)} />
                        <DescriptionMovieItem title="Возраст:" info={actor.age} />
                        <DescriptionMovieItem title="Дата рождения:" info={birthday} />
                        <DescriptionMovieItem title="Место рождения:" info={getString(actor.birthPlace)} />
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Actor;