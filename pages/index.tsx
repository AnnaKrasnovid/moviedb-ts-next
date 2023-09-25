import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Main from '../components/screens/Main/Main';

import { MainPageInt } from '../settings/interfaces';

import api from '../tools/api';

function Home({ movieRating, cartoons, series, movieRandom }: MainPageInt) {
  console.log(movieRandom)
  return (
    <Layout >
      <Main movieRating={movieRating} cartoons={cartoons} series={series} movieRandom={movieRandom} />
    </Layout>
  )
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movieRating: any = {};
  let cartoons: any = {};
  let series: any = {};
  let movieRandom: any = {};

  try {
    movieRating = await api.getMovies('movie', '2010-2023');
    cartoons = await api.getCartoons('2010-2023');
    series = await api.getMovies('tv-series', '2000-2023');
    movieRandom = await api.getMovieRandom()
  } catch (error) {
    console.log(error);
  }

  return {
    props: { movieRating, cartoons, series, movieRandom },
  }
}

export default Home;
