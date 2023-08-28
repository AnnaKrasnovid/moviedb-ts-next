import { useContext } from 'react'

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';

import { MoviesContext } from '../../context/MoviesContext';

function MoviesPage() {
    const { moviesList } = useContext(MoviesContext);
    
    return (
        <Layout>
            <MoviesList list={moviesList} />
        </Layout>
    );
}

export default MoviesPage;