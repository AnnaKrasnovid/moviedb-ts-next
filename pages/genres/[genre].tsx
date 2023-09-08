import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';

import { mov } from '../../assets/mockData/movies';
import api from '../../tools/api';



function MoviesPage({ genre }: any) {
    // console.log(genre)
    return (
        <Layout>
            <MoviesList list={genre.docs} />
        </Layout>
    );
}


export async function getServerSideProps(params: GetServerSidePropsContext) {
    let genre: any = {};
    genre = await api.getMoviesByGenre(params.query.genre, '2000-2023', '7-10');

    return {
        props: { genre },
    }
}

export default MoviesPage;
