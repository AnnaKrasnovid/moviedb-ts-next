import Layout from '@/layout/Layout/Layout';
import AboutMovieDB from '@/components/AboutMovieDB/AboutMovieDB';
import SectionGenres from '@/components/SectionGenres/SectionGenres';

function GenresPage() {
  return (
    <Layout heading={''}>
      <SectionGenres />
      <AboutMovieDB />
    </Layout>
  );
}

export default GenresPage;
