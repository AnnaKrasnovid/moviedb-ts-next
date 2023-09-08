import MoviesList from "../MoviesList/MoviesList";

import styles from './Actor.module.scss';

function Actor({ actor }: any) {
    const getString = (item: Array<any>) => {
        const array: Array<string> = [];
        item.map((i: any) => array.push(i.value))
        return array.join('/')
    }
    console.log(actor)
    return (
        <div>
            <div>
                <img src={actor.photo} alt="" />
                <div>
                    <h2>{actor.name}</h2>
                    <p>Карьера: {getString(actor.profession)}</p>
                    <p>Возраст: {actor.age}</p>
                    <p>Дата рождения: {actor.birthday}</p>
                    <p>Место рождения: {getString(actor.birthPlace)}</p>
                </div>
            </div>
            {/* <MoviesList list={actor.movies} /> */}

        </div>
    )
}

export default Actor;