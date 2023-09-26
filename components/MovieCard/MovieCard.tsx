import Image from 'next/image';

import Rating from '../Rating/Rating';

import { MovieCardMainInt } from '../../settings/interfaces';

import styles from './MovieCard.module.scss';

function MovieCard({ item, type = 'middle' }: MovieCardMainInt) {
  return (
    <div className={`${styles['movie']} `} >
      <div className={`${styles['movie__box']} ${styles[`movie__box_type_${type}`]}`}>
        {item.poster?.url ? <Image className={styles['movie__img']} src={item.poster.url} alt='Фильм' width={500} height={300} /> : <></>}
        {type !== 'small' && <div className={styles['movie__container']}>
          {item.rating.kp&&<Rating number={item.rating.kp} type='orange' />}
          {item.rating.imdb && (
            <Rating number={item.rating.imdb} type='yellow' />
          )}
        </div>}
        <div className={styles['movie__info']}>
          <p className={styles['movie__description']}> {item.year}, {item.genres[0]?.name}<br /> {item.countries[0] && item.countries[0].name} </p>         
          <h3 className={styles['movie__title']}>{item.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
