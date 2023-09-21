import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import Actor from '../../components/Actor/Actor';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import MovieCardSimple from '../../components/MovieCardSimple/MovieCardSimple';
import GridMovies from '../../components/GridMovies/GridMovies';
import Facts from '../../components/Facts/Facts';

import api from '../../tools/api';
import { checkEmptyObject } from '../../tools/utils';

function ActorPage({ actor }: any) {
  console.log(actor.movies)
  return (
    <Layout>
      {checkEmptyObject(actor) ? (
        <div>Что-то пошло не так...</div>
      ) : (
        <div className='page-actor'>
          <Actor actor={actor} />
          <GridMovies>
            {actor.movies.map((item: any) => (
              <li key={item.id}>
                <MovieCardSimple item={item} />
              </li>
            ))}
          </GridMovies>
          {actor.facts.length > 0 && <Facts list={actor.facts} />}
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let actor: any = {};

  try {
    actor = await api.getActorId(params.query.id);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { actor },
  }
}

export default ActorPage;