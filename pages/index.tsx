import { useContext, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Main from '../components/screens/Main/Main';

import { MainPageInt } from '../settings/interfaces';
import { TooltipContext } from '../context/TooltipContext';

import api from '../tools/api';

function Home({ movieRating, cartoons, series, movieRandom,message }: MainPageInt) {
  // const { setIsOpenTooltip, setTextError } = useContext(TooltipContext);  

  // useEffect(() => {
  //   if (message) {
  //     setIsOpenTooltip(true)
  //     setTextError(message)
  //     setTimeout(()=> setIsOpenTooltip(false), 5000)
  //   }
  // }, [message])
  
  return (
    <Layout >
      <Main movieRating={movieRating} cartoons={cartoons} series={series} movieRandom={movieRandom} />
    </Layout>
  )
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let message: string = '';
  let movieRating: any = {};
  let cartoons: any = {};
  let series: any = {};
  let movieRandom: any = {};

  function getError(movie: any, params: any) {
    if (movie) {
      if (movie < 200 || movie >= 300) {
        params.res.statusCode = movie;
        message = `Ошибка: ${movie}`;
      }
    }
  }

  // try {
    movieRating = await api.getMovies('movie', '2010-2023');
    movieRandom = await api.getMovieRandom();
    series = await api.getMovies('tv-series', '2000-2023');
    cartoons = await api.getMovies('cartoon', '2010-2023');

    const responseArray = [movieRating, series, cartoons, movieRandom]

    responseArray.map((item) => {
      // getError(item, params.res.statusCode)
    })
   
  // }
  // catch (error) {
  //   console.error('error', error);   
  // }

  return {
    props: { movieRating, cartoons, series, movieRandom ,message},
  }
}

export default Home;
