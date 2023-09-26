import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import { MoviesPageInt } from '../settings/interfaces';

import api from '../tools/api';

function SerialsPage({ movies }: MoviesPageInt) {
    return (
        <Layout>
            <MoviesList list={movies.docs} pages={movies.pages} />
        </Layout>
    );
}

export async function getServerSideProps() {
    let movies: any = {};

    try {
        movies = await api.getMovies('tv-series', '2000-2023');
    } catch (error) {
        console.log(error);
    }

    return {
        props: { movies },
    }
}

export default SerialsPage;