import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Movie from '@/components/screens/Movie/Movie';
import Information from '@/UI/Information/Information';

import { MoviePageInt } from '@/settings/interfaces';

import api from '../../tools/api';

function MoviePage({ movie, error }: MoviePageInt) {
  return (
    <Layout heading={movie.name}>
      {error
        ? <Information text={`Ошибка: ${error}`} />
        : <Movie movie={movie} />
      }
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movie: any = {};
  let error: string = '';
  const response = await api.getMovieId(params.query.id);

  if (typeof response === 'string') {
    error = response;
  } else {
    movie = response;
  }

  return {
    props: { movie, error },
  }
}

export default MoviePage;