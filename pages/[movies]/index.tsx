import { useContext } from 'react';
import { GetServerSidePropsContext } from 'next';

import Layout from '../../layout/Layout/Layout';
import MoviesList from '../../components/MoviesList/MoviesList';

import { MoviesContext } from '../../context/MoviesContext';
import api from '../../tools/api';

function MoviesPage() {
    const { moviesList } = useContext(MoviesContext);
    return (
        <Layout>
            {/* <MoviesList list={movies} /> */}
        </Layout>
    );
}

// export async function getServerSideProps() {
//     let movies: any = {};
//     // movies = await api.getMovieId(params.query.id)
//     // console.log()

//     let moviesType: string = 'movie';
//     // if (params.query.movies === 'movies') {
//     //     moviesType = 'movie'
//     // } else if (params.query.movies === 'series') {
//     //     moviesType = 'tv-series'
//     // } else if (params.query.movies === 'cartoons') {
//     //     moviesType = 'cartoon'
//     // }
//     // console.log(moviesType)
//     // // movies = await api.getMovies(moviesType, '2020-2023')
//     // console.log(await api.getMovies('movie', '2020-2023'))
//     return {
//         props: { movies },
//     }
// }

export default MoviesPage;