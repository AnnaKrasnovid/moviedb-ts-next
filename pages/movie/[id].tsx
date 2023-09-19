import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

import Layout from '../../layout/Layout/Layout';
import DescriptionMovieCard from '../../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../../components/Сompilation/Compilation';
import MoviePosters from '../../components/MoviePosters/MoviePosters';
import ActorsList from '../../components/ActorsList/ActorsList';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import Facts from '../../components/Facts/Facts';

import api from '../../tools/api';
import { checkEmptyObject } from '../../tools/utils';
import { routes } from '../../settings/routes';

function MoviePage({ movie }: any) {
  const actors = movie.persons.filter((i: any) => i.profession === 'актеры');
  console.log(movie.similarMovies.length)
  return (
    <Layout>
      <div className='page-movie'>
        <DescriptionMovieCard movie={movie} />
        <ActorsList list={actors} />
        {movie.similarMovies.length > 0 && <SimilarMovies list={movie.similarMovies} />}
        {movie.facts.length > 0 && <Facts list={movie.facts} />}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movie: any = {};
  movie = await api.getMovieId(params.query.id);

  try {
    movie = await api.getMovieId(params.query.id);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { movie },
  }
}

export default MoviePage;