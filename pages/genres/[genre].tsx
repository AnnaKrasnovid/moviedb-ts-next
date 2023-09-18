import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';

import api from '../../tools/api';
import { mov } from '../../assets/mockData/movies';

function MoviesPage({ genre }: any) {
    return (
        <Layout>
            <MoviesList list={genre.docs} pages={genre.pages} /> 
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let genre: any = {};

    try {
        genre = await api.getMoviesByGenre(params.query.genre, '2000-2023', '7-10');
    } catch (error) {
        console.log(error);
    }

    return {
        props: { genre },
    }
}

export default MoviesPage;
