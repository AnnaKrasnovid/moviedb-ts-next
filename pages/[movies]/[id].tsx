import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import DescriptionMovieCard from '../../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../../components/Сompilation/Compilation';
import MoviePosters from '../../components/MoviePosters/MoviePosters';
import ActorsList from '../../components/ActorsList/ActorsList';

import api from '../../tools/api';

function MoviePage({ movie }: any) {
  console.log(movie.docs[0].persons)
const actors = movie.docs[0].persons.filter((i:any)=> i.profession==='актеры')
console.log(actors)
  return (
    <Layout>
      <DescriptionMovieCard movie={movie.docs[0]} />
      {/* <MoviePosters /> */}      
      <ActorsList list={actors} />
      {/* <Compilation title='Фильмы в этом жанре' moviesList={mov} />  */}
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movie: any = {};
  movie = await api.getMovieId(params.query.id)

  return {
    props: { movie },
  }
}

export default MoviePage;


