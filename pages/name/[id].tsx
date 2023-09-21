import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import Person from '../../components/screens/Person/Person';

import api from '../../tools/api';

function ActorPage({ actor }: any) {
  return (
    <Layout>
      <Person actor={actor}/>     
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