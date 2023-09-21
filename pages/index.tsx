import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';

import { mov } from '../assets/mockData/movies';
import api from '../tools/api';

function Home({ movieRating, cartoons, series, drama, comedy }: any) {
  return (
    <Layout >
      <Lead />
      <Compilation title='Сериалы' moviesList={series.docs} />
      <Compilation title='Фильмы с высоким рейтингом' moviesList={movieRating.docs} />
      <Compilation title='Мультфильмы' moviesList={cartoons.docs} />
      <Compilation title='Драмы' moviesList={drama.docs} />
      <Compilation title='Комедии' moviesList={comedy.docs} />
      {/*<Compilation title='Детективы' moviesList={mov} /> */}
      {/* <DescriptionMovieCard movie={mov[3]} /> */}
    </Layout>
  )
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movieRating: any = {};
  let cartoons: any = {};
  let series: any = {};
  let comedy: any = {};
  let drama: any = {};

  try {
    movieRating = await api.getMovies('movie', '2010-2023');
    cartoons = await api.getCartoons('2010-2023');
    series = await api.getMovies('tv-series', '2000-2023');
    comedy = await api.getMoviesByGenre('комедия', '2000-2023', '8-10')
    drama = await api.getMoviesByGenre('драма', '2000-2023', '8-10')
  } catch (error) {
    console.log(error);
  }

  return {
    props: { movieRating, cartoons, series, drama, comedy },
  }
}

export default Home;
