import { GetServerSidePropsContext } from 'next';

import Layout from '../layout/Layout/Layout';
import Movies from '../components/Movies/Movies';

import { MoviesPageInt } from '../settings/interfaces';

import api from '../tools/api';

function MoviesPage({ movies }: MoviesPageInt) {
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
        if (movie.status) {
          if (movie.status < 200 || movie.status >= 300) {
            params.res.statusCode = movie.status;
            message = `Ошибка: ${movie.status}, ${movie.message}`;
          }
        }
      }

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