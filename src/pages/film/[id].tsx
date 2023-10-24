import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Movie from '@/components/screens/Movie/Movie';

import { MoviePageInt } from '@/settings/interfaces';

import api from '../../tools/api';

function MoviePage({ movie }: MoviePageInt) {
  return (
    <Layout>      
      <Movie movie={movie}/>
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movie: any = {};

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