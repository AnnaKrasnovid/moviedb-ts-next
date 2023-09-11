import { useContext } from 'react';
import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import { MoviesContext } from '../context/MoviesContext';
import api from '../tools/api';

function MoviesPage({movies}:any) {   
const {isSearchMovie} =useContext(MoviesContext)
    return (
        <Layout>
            <MoviesList list={movies.docs} />
        </Layout>
    );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
    let movies: any = {};     
    movies = await api.getMovies('movie', '2000-2023');  
   
    return {
        props: { movies },
    }
}

export default MoviesPage;