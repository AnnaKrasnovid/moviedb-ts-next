import { useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../layout/Layout/Layout';
import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';

import { mov } from '../assets/mockData/movies';

export default function Home() {


  return (
    <>
      <Head>
        <title>MovieDB</title>
        <meta name="description" content="Сайт для поиска фильмов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='page'>
        <Layout >
          <>
            <Lead />
            <Compilation title='Сериалы' moviesList={mov} />
            <Compilation title='Фильмы с высоким рейтингом' moviesList={mov} />
            <Compilation title='Мультфильмы' moviesList={mov} />
            <Compilation title='Драмы' moviesList={mov} />
            <Compilation title='Комедии' moviesList={mov} />
            <Compilation title='Детективы' moviesList={mov} />
            <DescriptionMovieCard movie={mov[3]} />
          </>
        </Layout>
      </div>
    </>
  )
}
