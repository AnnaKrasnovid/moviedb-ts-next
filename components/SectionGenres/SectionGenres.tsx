import GenreCard from '../GenreCard/GenreCard';

import { submenuGenres } from '../../settings/menuList';
import styles from './SectionGenres.module.scss';

function SectionGenres() {

  function getCards() {
    return submenuGenres.map((item, index) => {
      if (index >= 3) {
        return (
          <li key={item.id} className={`${styles['genres__box']} ${styles['genres__box_type_three']}`}>
            <GenreCard item={item} index={index} />
          </li>
        );
      }
    });
  }
 
  return (
    <section className={styles['genres']} aria-label='Жанры'>
      <ul className={styles['genres__list']}>
        <li className={`${styles['genres__box']} ${styles['genres__box_type_one']}`}>
          <GenreCard item={submenuGenres[0]} index={0} />
        </li>
        <li>
          <ul className={styles['genres__container-two']}>
            <li className={`${styles['genres__box']} ${styles['genres__box_type_two']}`}>
              <GenreCard item={submenuGenres[1]} index={1} />
            </li>
            <li className={`${styles['genres__box']} ${styles['genres__box_type_two']}`}>
              <GenreCard item={submenuGenres[2]} index={2} />
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles['genres__container-three']}>
            {getCards()}
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default SectionGenres;