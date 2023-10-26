import { memo } from "react";
import Image from "next/image";

import DescriptionMovieItem from "../DescriptionMovieItem/DescriptionMovieItem";

import { getTextYear } from "@/helpers/getTextYear/getTextYear";
import { getString } from "@/helpers/getString/getString";
import { getDateFormat } from "@/helpers/getDateFormat/getDateFormat";
import { ActorInt } from "@/settings/interfaces";

import styles from './Actor.module.scss';

function Actor({ actor }: ActorInt) {
    return (
        <div className={styles['page-actor']}>
            <div className={styles['actor-info']}>
                <div className={styles['actor-info__img']}>
                    {actor.photo && <Image src={actor.photo} alt={`Фотография ${actor.name}`} width={300} height={500} />}
                </div>
                <div className={styles['actor-info__content']}>
                    <h2 className={styles['actor-info__title']}>{actor.name}</h2>
                    <ul className={styles['actor-info__wrapper']}>
                        {actor.profession && <DescriptionMovieItem title="Карьера:" info={getString(actor.profession)} />}
                        {actor.age && <DescriptionMovieItem title="Возраст:" info={`${actor.age} ${getTextYear(51)}`} />}
                        {/* {actor.birthday && <DescriptionMovieItem title="Дата рождения:" info={getDateFormat(actor.birthday)} />} */}
                        {actor.birthPlace && <DescriptionMovieItem title="Место рождения:" info={getString(actor.birthPlace)} />}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(Actor);