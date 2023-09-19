import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import Actor from '../../components/Actor/Actor';

import api from '../../tools/api';
import { checkEmptyObject } from '../../tools/utils';

function ActorPage({ actor }: any) {
  console.log(actor)
  return (
    <Layout>
      {checkEmptyObject(actor) ? <div>Что-то пошло не так...</div> : <Actor actor={actor} />}
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