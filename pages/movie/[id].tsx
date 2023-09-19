import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

import Layout from '../../layout/Layout/Layout';
import DescriptionMovieCard from '../../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../../components/Сompilation/Compilation';
import MoviePosters from '../../components/MoviePosters/MoviePosters';
import ActorsList from '../../components/ActorsList/ActorsList';

import api from '../../tools/api';
import { checkEmptyObject } from '../../tools/utils';
import { routes } from '../../settings/routes';

function MoviePage({ movie }: any) {
  const actors = movie.persons.filter((i: any) => i.profession === 'актеры');
console.log(movie)
  return (
    <Layout>
      {/* {checkEmptyObject(movie.docs[0]) ? <div>Что-то пошло не так...</div> : (
        <> */}
          <DescriptionMovieCard movie={movie} />
          <ActorsList list={actors} />
        
      
        {/* </>
      )} */}
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