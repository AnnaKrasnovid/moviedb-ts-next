import { memo } from "react";
import Image from "next/image";

import DescriptionActorList from "../DescriptionActorList/DescriptionActorList";

import { ActorInt } from "@/settings/interfaces";

import styles from './Actor.module.scss';

function Actor({ actor }: ActorInt) {
    return (
        <div className={styles['page-actor']}>
            <div className={styles['actor-info']}>
                <div className={styles['actor-info__img']}>
                    {actor.photo &&
                        <Image
                            src={actor.photo}
                            alt={`Фотография ${actor.name}`}
                            width={300}
                            height={500}
                        />
                    }
                </div>
                <div className={styles['actor-info__content']}>
                    <h2 className={styles['actor-info__title']}>{actor.name}</h2>
                    <DescriptionActorList actor={actor} />
                </div>
            </div>
        </div>
    )
}

export default memo(Actor);