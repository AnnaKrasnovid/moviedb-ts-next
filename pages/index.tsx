import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';

import { mov } from '../assets/mockData/movies';
import api from '../tools/api';

function Home({ movieRating, cartoons, series }: any) {
  return (
    <Layout >
      <Lead />
      <Compilation title='Сериалы' moviesList={series.docs} />
      <Compilation title='Фильмы с высоким рейтингом' moviesList={movieRating.docs} />
      <Compilation title='Мультфильмы' moviesList={cartoons.docs} />
       <Compilation title='Драмы' moviesList={mov} />
      {/*<Compilation title='Комедии' moviesList={mov} />
      <Compilation title='Детективы' moviesList={mov} /> */}
      {/* <DescriptionMovieCard movie={mov[3]} /> */}
    </Layout>
  )
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let movieRating: any = {};
  let cartoons: any = {};
  let series: any = {};
  let comedy: any = {};

  try {
    // movieRating = await api.getMovies('movie', '2022-2023');
    // cartoons = await api.getCartoons('2010-2023');
    // series = await api.getSeries('2010-2023');
    // comedy = await api.getMovies('2022-2023');
  } catch (error) {
    console.log(error);
  }

  return {
    props: { movieRating, cartoons, series },
  }
}

export default Home;
