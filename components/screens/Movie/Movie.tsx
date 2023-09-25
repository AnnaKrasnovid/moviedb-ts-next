import DescriptionMovieCard from '../../DescriptionMovieCard/DescriptionMovieCard';
import ActorsList from '../../ActorsList/ActorsList';
import SimilarMovies from '../../SimilarMovies/SimilarMovies';
import Facts from '../../Facts/Facts';

import { MovieCardInt, ActorSimpleItemInt } from '../../../settings/interfaces';

import styles from './Movie.module.scss';

function Movie({ movie }: any) {
  const actors = movie.persons.filter((i: ActorSimpleItemInt) => i.profession === 'актеры');

  return (
    <div className={styles['page-movie']}>
      <DescriptionMovieCard movie={movie} />
      <ActorsList list={actors} />
      {movie.similarMovies.length > 0 && <SimilarMovies list={movie.similarMovies} />}
      {movie.facts?.length > 0 && <Facts list={movie.facts} />}
    </div>
  );
}

export default Movie;