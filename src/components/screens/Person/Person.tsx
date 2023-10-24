import { memo } from 'react';

import Actor from '@/components/Actor/Actor';
import MovieCardSimple from '@/components/MovieCardSimple/MovieCardSimple';
import GridMovies from '@/components/GridMovies/GridMovies';
import Facts from '@/components/Facts/Facts';
import Button from '@/UI/Button/Button';
import Information from '@/UI/Information/Information';
import Subtitle from '@/components/Subtitle/Subtitle';

import { useShowMore } from '@/hooks/useShowMore';
import { checkEmptyObject } from '../../../tools/utils';
import { PersonPageInt } from '@/settings/interfaces';

import styles from './Person.module.scss';

function Person({ actor }: PersonPageInt) {
  const { renderList, showMoreItems } = useShowMore(actor.movies, 12);

  return (
    <>
      {checkEmptyObject(actor) ? (
        <Information text='Что-то пошло не так...' />
      ) : (
        <div className={styles['page-actor']}>
          <Actor actor={actor} />
          <div className={styles['page-actor__container']}>
            <Subtitle text={`Фильмы (${actor.movies.length})`} />
            <GridMovies>
              {renderList.map((item: any) => (
                <li key={item.id}>
                  <MovieCardSimple item={item} />
                </li>
              ))}
            </GridMovies>
            {renderList.length > 0 && renderList.length < actor.movies.length && <Button text='Показать еще' callback={showMoreItems} className={styles['page-actor-button']} />}
          </div>
          {actor.facts.length > 0 && <Facts list={actor.facts} />}
        </div>
      )}
    </>
  );
}

export default memo(Person);