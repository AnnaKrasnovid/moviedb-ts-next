import { aboutUs } from '@/assets/appData/aboutUs';

import styles from './AboutMovieDB.module.scss';

function AboutMovieDB() {
  return (
    <section className={styles['about-us']} aria-label='О сайте MovieDB'>
      <ul className={styles['about-us__container']}>
        {aboutUs.map((item, index) => (
          <li key={index} className={styles['about-us__text']}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutMovieDB;
