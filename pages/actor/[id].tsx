import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';
import Actor from '../../components/Actor/Actor';

import api from '../../tools/api';

function ActorPage({actor}:any) {  
    return (
        <Layout>
           <Actor actor={actor}/>
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let actor: any = {};
    actor = await api.getActorId(params.query.id);
  
    return {
      props: { actor },
    }
  }

export default ActorPage;