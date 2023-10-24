import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Movies from '@/components/Movies/Movies';

import { MoviesPageInt } from '@/settings/interfaces';
import { checkEmptyObject } from '../tools/utils';
import { MOVIES_LIMIT } from '@/settings/constants';
import { getQueryParams } from '../tools/utils';

import api from '../tools/api';

function MoviesPage({ movies, message }: MoviesPageInt) {
    // console.log(movies)
    // console.log(message)
    return (
        <Layout>
            <Movies list={movies.docs} pages={movies.pages} />
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let message: string = '';
    let movies: any = {};

    function getError(movie: any, params: any) {
        if (movie < 200 || movie >= 300) {
            params.res.statusCode = movie;
            message = `Ошибка: ${movies}`;
        }
    }

    const queryFilters = getQueryParams(params.query.genre, params.query.years, params.query.rating)
    
    movies = await api.filtersMovies(queryFilters, 'type=movie', MOVIES_LIMIT);
    getError(movies, params)

    return {
        props: { movies, message },
    }
}

export default MoviesPage;