import GenreMovie from '../../image/genre-childish.png';
import styles from './MoviePosters.module.scss';

function MoviePosters({ list }: any) {
  return (
    <section className={styles['posters']}>
      <ul className={styles['posters__list']}>
        <li className={styles['posters__item']}>
          <img className={styles['posters__img']} srs={GenreMovie} alt='Постер к фильму' />
        </li>
      </ul>
    </section>
  );
}

export default MoviePosters;
