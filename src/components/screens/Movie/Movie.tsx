import DescriptionMovieCard from '@/components/DescriptionMovieCard/DescriptionMovieCard';
import ActorsList from '@/components/ActorsList/ActorsList';
import SimilarMovies from '@/components/SimilarMovies/SimilarMovies';
import Facts from '@/components/Facts/Facts';

import { ActorSimpleItemInt } from '@/settings/interfaces';

import styles from './Movie.module.scss';

function Movie({ movie }: any) {
  const actors = movie.persons.filter((i: ActorSimpleItemInt) => i.profession === 'актеры');
  
  return (
    <div className={styles['page-movie']}>
      <DescriptionMovieCard movie={movie} />
      <ActorsList list={actors} />
      <SimilarMovies list={movie.similarMovies} />
      <Facts list={movie.facts} />
    </div>
  );
}

export default Movie;