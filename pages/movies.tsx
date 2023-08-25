import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import { mov } from '../assets/mockData/movies';

function MoviesPage() {
    return (
        <Layout>
            <MoviesList list={mov} />
        </Layout>
    );
}

export default MoviesPage;