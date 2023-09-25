import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import Movie from '../../components/screens/Movie/Movie';

import { MovieItemInt } from '../../settings/interfaces';

import api from '../../tools/api';

interface MoviePageInt {
  movie: MovieItemInt
}

function MoviePage({ movie }: MoviePageInt) {
  
  console.log(movie)
  return (
    <Layout>      
      <Movie movie={movie}/>
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