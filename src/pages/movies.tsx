import { GetServerSidePropsContext } from 'next';

import Layout from '@/layout/Layout/Layout';
import Movies from '@/components/Movies/Movies';
import Information from '@/UI/Information/Information';

import { MoviesPageInt } from '@/settings/interfaces';
import { MOVIES_LIMIT } from '@/settings/constants';
import { getQueryParams } from '@/helpers/getQueryParams/getQueryParams';

import api from '../tools/api';

function MoviesPage({ movies, error }: MoviesPageInt) {
    return (
        <Layout heading='Фильмы'>
            {!error
                ? <Movies list={movies.docs} pages={movies.pages} error={error} />
                : <Information text={error} />
            }
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let movies: any = {};
    let error: string = '';

    const queryFilters = getQueryParams(params.query.genre, params.query.years, params.query.rating);
    const response = await api.filtersMovies(queryFilters, 'type=movie', MOVIES_LIMIT);

    if (typeof response === 'string') {
        error = response;
    } else {
        movies = response;
    }

    return {
        props: { movies, error },
    }
}

export default MoviesPage;