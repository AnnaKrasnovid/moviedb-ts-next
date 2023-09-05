import { useContext } from 'react';
import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import { MoviesContext } from '../context/MoviesContext';
import api from '../tools/api';

function SearchPage() {
    const { moviesList } = useContext(MoviesContext);

    return (
        <Layout>
            <MoviesList list={moviesList} />
        </Layout>
    );
}

export default SearchPage;