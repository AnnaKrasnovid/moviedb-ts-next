import Image from 'next/image';

import Rating from '../Rating/Rating';

import { MovieInt } from '../../settings/interfaces';

import styles from  './MovieCard.module.scss';

// interface MovieCardInt {
//   item: MovieInt
// }

function MovieCard({ item, type='middle' }:any) {
  
  return (
    <div className={`${styles['movie']} `} >
    <div className={`${styles['movie__box']} ${styles[`movie__box_type_${type}`]}`}>
       {item.poster?.url ? <Image className={styles['movie__img']} src={item.poster.url} alt='Фильм' width={500} height={300} /> : <></>}
        {type!=='small'&&<div className={styles['movie__container']}>
          <Rating number={item.rating.kp} type='orange' />
          {item.rating.imdb > 0 && (
            <Rating number={item.rating.imdb} type='yellow' />
          )}
        </div>}
        <div className={styles['movie__info']}>
          <p className={styles['movie__description']}> {item.year}<br /> {item.genres[0].name}<br /> {item.countries[0] && item.countries[0].name} </p>
        </div>
      </div>
      {/* <h3 className={styles['movie__title']}>{item.name}</h3> */}
    </div>
  );
}

export default MovieCard;
