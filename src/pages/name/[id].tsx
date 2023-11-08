import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Person from '@/components/screens/Person/Person';
import Information from '@/UI/Information/Information';

import { ActorPageInt } from '@/settings/interfaces';

import api from '../../tools/api';

function ActorPage({ actor, error }: ActorPageInt) { 
  return (
    <Layout heading={actor.name}>
      {error
        ? <Information text={`Ошибка: ${error}`} />
        : <Person actor={actor} />
      }
    </Layout>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  let actor: any = {};
  let error: string = '';
  
  const response = await api.getActorId(params.query.id);

  if (typeof response === 'string') {
    error = response;
  } else {
    actor = response;
  }

  return {
    props: { actor,error },
  }
}

export default ActorPage;