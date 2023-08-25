import Layout from '../../../layout/Layout/Layout';
import DescriptionMovieCard from '../../../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../../../components/Сompilation/Compilation';
import MoviePosters from '../../../components/MoviePosters/MoviePosters';

import { mov } from '../../../assets/mockData/movies';

function MoviePage() {
  // let { state }: any = useLocation();

  return (
    <Layout>     
      <DescriptionMovieCard movie={mov[0]} />
      {/* <MoviePosters /> */}
      <Compilation title='Фильмы в этом жанре' moviesList={mov}
       />
    </Layout>
  );
}

export default MoviePage;