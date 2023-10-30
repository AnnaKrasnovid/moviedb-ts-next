import DescriptionMovieItem from "../DescriptionMovieItem/DescriptionMovieItem";

import { getTextYear } from "@/helpers/getTextYear/getTextYear";
import { getString } from "@/helpers/getString/getString";
import { getDateFormat } from "@/helpers/getDateFormat/getDateFormat";
import { ActorInt } from "@/settings/interfaces";

import styles from './DescriptionActorList.module.scss';

function DescriptionActorList({ actor }: ActorInt) {
    return (
        <ul className={styles['actor-info__wrapper']}>
            {actor.profession.length > 0 &&
                <DescriptionMovieItem
                    title="Карьера:"
                    info={getString(actor.profession)}
                />
            }
            {actor.age &&
                <DescriptionMovieItem
                    title="Возраст:"
                    info={`${actor.age} ${getTextYear(actor.age)}`}
                />
            }
            {actor.birthday &&
                <DescriptionMovieItem
                    title="Дата рождения:"
                    info={getDateFormat(actor.birthday)}
                />
            }
            {actor.birthPlace.length > 0 &&
                <DescriptionMovieItem
                    title="Место рождения:"
                    info={getString(actor.birthPlace)}
                />
            }
        </ul>
    )
}

export default DescriptionActorList;