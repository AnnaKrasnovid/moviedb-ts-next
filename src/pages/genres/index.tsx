import Layout from '@/layout/Layout/Layout';
import AboutMovieDB from '@/components/AboutMovieDB/AboutMovieDB';
import SectionGenres from '@/components/SectionGenres/SectionGenres';

function GenresPage() {
  return (
    <Layout >
      <SectionGenres />
      <AboutMovieDB />
    </Layout>
  );
}

export default GenresPage;
