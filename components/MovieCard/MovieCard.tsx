import Image from 'next/image';

import Rating from '../Rating/Rating';

import { MovieInt } from '../../settings/interfaces';

import styles from './MovieCard.module.scss';

type MovieTypesCard = 'small' | 'middle';

interface MovieCardInt {
  item: any,
  type?: MovieTypesCard
}

function MovieCard({ item, type = 'middle' }: MovieCardInt) {

  return (
    <div className={`${styles['movie']} `} >
      <div className={`${styles['movie__box']} ${styles[`movie__box_type_${type}`]}`}>
        {item.poster?.url ? <Image className={styles['movie__img']} src={item.poster.url} alt='Фильм' width={500} height={300} /> : <></>}
        {type !== 'small' && <div className={styles['movie__container']}>
          <Rating number={item.rating.kp} type='orange' />
          {item.rating.imdb > 0 && (
            <Rating number={item.rating.imdb} type='yellow' />
          )}
        </div>}
        <div className={styles['movie__info']}>
          <p className={styles['movie__description']}> {item.year}, {item.genres[0]?.name}<br /> {item.countries[0] && item.countries[0].name} </p>         
          <h3 className={styles['movie__title']}>{item.name}</h3>
        </div>
      </div>
      {/* <h3 className={styles['movie__title']}>{item.name}</h3> */}
    </div>
  );
}

export default MovieCard;
