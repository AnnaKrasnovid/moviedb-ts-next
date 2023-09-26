import { useState, useEffect } from 'react';

import Actor from '../../Actor/Actor';
import MovieCardSimple from '../../MovieCardSimple/MovieCardSimple';
import GridMovies from '../../GridMovies/GridMovies';
import Facts from '../../Facts/Facts';
import Button from '../../../UI/Button/Button';

import { checkEmptyObject } from '../../../tools/utils';
import { MovieSimpleInt, PersonPageInt } from '../../../settings/interfaces';
import styles from './Person.module.scss';


function Person({ actor }: PersonPageInt) {
  const [movies, setMovies] = useState(12);
  const [renderList, setRenderList] = useState<Array<MovieSimpleInt>>([]);

  // function getList() {
  //   let arr: Array<number> = [];
  //   let movies: any = []

  //   // actor.movies.map((item: any) => {
  //   //   arr.push(item.id)
  //   // })
  //    const uniqueId = Array.from(new Set(arr))

  //   const res=actor.movies.map((item: any, index: number) => {
  //    const reult= uniqueId.find((i)=> item.id===i)
  //     return reult
  //   })
  //   console.log( res)
  // }

  // getList()

  function showMoreMoviess() {
    setMovies(movies + 6);
  }
  useEffect(() => {
    setRenderList(actor.movies)
  }, [])

  useEffect(() => {
    if (actor.movies.length > 0) {
      setRenderList(actor.movies.slice(0, movies))
    }
  }, [movies])
  console.log(renderList)
  return (
    <>
      {checkEmptyObject(actor) ? (
        <div>Что-то пошло не так...</div>
      ) : (
        <div className={styles['page-actor']}>
          <Actor actor={actor} />
          <div className={styles['page-actor__container']}>
            <p className='subtitle'>Фильмы ({actor.movies.length})</p>
            <GridMovies>
              {renderList.map((item: any) => (
                <li key={item.id}>
                  <MovieCardSimple item={item} />
                </li>
              ))}
            </GridMovies>
            {renderList.length < actor.movies.length && <Button text='Показать еще' callback={showMoreMoviess} className={styles['page-actor-button']} />}
          </div>
          {actor.facts && <Facts list={actor.facts} />}
        </div>
      )}
    </>
  );
}

export default Person;