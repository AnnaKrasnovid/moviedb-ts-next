import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import api from '../tools/api';
import { mov } from '../assets/mockData/movies';

function MoviesPage({ movies }: any) {
   
    return (
        <Layout>
            <MoviesList list={movies.docs} pages={movies.pages} />
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let movies: any = {};

    try {
        movies = await api.getMovies('movie', '2000-2023');
    } catch (error) {
        console.log(error);
    }

    return {
        props: { movies },
    }
}

export default MoviesPage;