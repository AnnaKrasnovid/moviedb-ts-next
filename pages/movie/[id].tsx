import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import DescriptionMovieCard from '../../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../../components/Сompilation/Compilation';
import MoviePosters from '../../components/MoviePosters/MoviePosters';
import ActorsList from '../../components/ActorsList/ActorsList';

import api from '../../tools/api';
import { checkEmptyObject } from '../../tools/utils';

function MoviePage({ movie }: any) {
  const actors = movie.docs[0].persons.filter((i: any) => i.profession === 'актеры');

  return (
    <Layout>
      {/* {checkEmptyObject(movie.docs[0]) ? <div>Что-то пошло не так...</div> : (
        <> */}
          <DescriptionMovieCard movie={movie.docs[0]} />
          <ActorsList list={actors} />
        {/* </>
      )} */}

      {/* <Compilation title='Фильмы в этом жанре' moviesList={mov} />  */}
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