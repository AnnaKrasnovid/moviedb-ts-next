import { useContext, useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Main from '@/components/screens/Main/Main';

import { MainPageInt } from '@/settings/interfaces';
import { TooltipContext } from '@/context/TooltipContext';

import api from '../tools/api';

function Home({ movieRating, cartoons, series, movieRandom, error = [] }: MainPageInt) {
  const arrayError = Array.from(new Set(error));
  const message = arrayError.join(' / ');

  const { openTooltip, closeTooltip, setTextError } = useContext(TooltipContext);

  useEffect(() => {
    if (message) {
      openTooltip();
      setTextError(message);
      setTimeout(() => closeTooltip(), 5000);
    }
  }, [message])

  return (
    <Layout heading='MovieDB'>
      <Main movieRating={movieRating} cartoons={cartoons} series={series} movieRandom={movieRandom} />
    </Layout>
  )
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let error: Array<string> = [];
  let movieRating: any = {};
  let cartoons: any = {};
  let series: any = {};
  let movieRandom: any = {};

  function getError(res: string) {
    const statusCode = Number(res.split(' ')[0]);

    if (statusCode < 200 || statusCode >= 300) {
      error.push(`${res}`);
    }
  }

  movieRating = await api.getMovies('movie', '2010-2023');
  movieRandom = await api.getMovieRandom();
  series = await api.getMovies('tv-series', '2000-2023');
  cartoons = await api.getMovies('cartoon', '2010-2023');

  const responseArray = [movieRating, series, cartoons, movieRandom]

  responseArray.map((item) => {
    if (typeof item === 'string') {
      getError(item)
    }
  });

  return {
    props: { movieRating, cartoons, series, movieRandom, error },
  }
}

export default Home;
