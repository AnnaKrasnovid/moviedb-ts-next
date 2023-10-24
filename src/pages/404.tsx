import Layout from '@/layout/Layout/Layout';
import NotFound from '@/components/NotFound/NotFound';

function NotFoundPage() {
  return (
    <Layout>
      <NotFound status='404' message='Страница не найдена'/>
    </Layout>
  );
}

export default NotFoundPage;
