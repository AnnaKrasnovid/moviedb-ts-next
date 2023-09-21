import { useState, useEffect } from 'react';

import Actor from '../../Actor/Actor';
import MovieCardSimple from '../../MovieCardSimple/MovieCardSimple';
import GridMovies from '../../GridMovies/GridMovies';
import Facts from '../../Facts/Facts';
import Button from '../../../UI/Button/Button';

import { checkEmptyObject } from '../../../tools/utils';
import styles from './Person.module.scss';

function Person({ actor }: any) {
  const [movies, setMovies] = useState(12);
  const [renderList, setRenderList] = useState(actor.movies);

  function showMoreMoviess() {
    setMovies(movies + 6);
  }

  useEffect(() => {
    setRenderList(actor.movies.slice(0, movies))
  }, [movies])

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
            <Button title='Показать еще' callback={showMoreMoviess} className={styles['page-actor-button']}/>
          </div>
          {actor.facts.length > 0 && <Facts list={actor.facts} />}
        </div>
      )}
    </>
  );
}

export default Person;