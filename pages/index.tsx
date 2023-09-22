import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';
import Main from '../components/screens/Main/Main';

import { mov } from '../assets/mockData/movies';
import { routes } from '../settings/routes';
import api from '../tools/api';

function Home({ movieRating, cartoons, series, movieRandom }: any) {
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
