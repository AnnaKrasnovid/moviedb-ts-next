import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';

import api from '../../tools/api';
import { MoviesPageInt } from '../../settings/interfaces';

function MoviesPage({ movies }: MoviesPageInt) {
    return (
        <Layout>
            <MoviesList list={movies.docs} pages={movies.pages} /> 
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let movies: any = {};

    try {
        movies = await api.getMoviesByGenre(params.query.genre, '2000-2023', '7-10');
    } catch (error) {
        console.log(error);
    }

    return {
        props: { movies },
    }
}

export default MoviesPage;
