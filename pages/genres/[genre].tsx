import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import Movies from '../../components/Movies/Movies';

import api from '../../tools/api';
// import { MoviesPageInt } from '../../settings/interfaces';

function MoviesPage() {
    return (
        <Layout>
            <Movies /> 
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let movies: any = {};

    // try {
    //     movies = await api.getMoviesByGenre(params.query.genre, '2000-2023', '7-10');
    // } catch (error) {
    //     console.log(error);
    // }

    return {
        props: { movies },
    }
}

export default MoviesPage;
