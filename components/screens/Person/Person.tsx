import { memo } from 'react';

import Actor from '../../Actor/Actor';
import MovieCardSimple from '../../MovieCardSimple/MovieCardSimple';
import GridMovies from '../../GridMovies/GridMovies';
import Facts from '../../Facts/Facts';
import Button from '../../../UI/Button/Button';

import { useShowMore } from '../../../hooks/useShowMore';
import { checkEmptyObject } from '../../../tools/utils';
import { PersonPageInt } from '../../../settings/interfaces';
import styles from './Person.module.scss';

function Person({ actor }: PersonPageInt) {
  const { renderList, showMoreItems } = useShowMore(actor.movies, 12);

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
            {renderList.length < actor.movies.length && <Button text='Показать еще' callback={showMoreItems} className={styles['page-actor-button']} />}
          </div>
          {actor.facts.length > 0 && <Facts list={actor.facts} />}
        </div>
      )}
    </>
  );
}

export default memo(Person);