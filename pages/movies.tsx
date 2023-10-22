import { GetServerSideProps } from 'next';
import { wrapper } from '../store';
import { filtersMovies } from '../services/MoviesApi';
import { useFiltersMoviesQuery } from '../services/MoviesApi';
import Layout from '../layout/Layout/Layout';
import Movies from '../components/Movies/Movies';
import { filterGenre, filterRating, filterYears } from '../store/reducers/filtersSlise';
// import { MoviesPageInt } from '../settings/interfaces';
import { moviesApi } from '../services/MoviesApi';

import api from '../tools/api';

function MoviesPage({ initialReduxState }: any) {
    console.log(initialReduxState)
    return (
        <Layout>
            <Movies />
        </Layout>
    );
}

// export async function getServerSideProps(params: GetServerSidePropsContext) {
//     let message: string = '';
//     let movies: any = {};

//     // function getError(movie: any, params: any) {
//     //     if (movie.status) {
//     //       if (movie.status < 200 || movie.status >= 300) {
//     //         params.res.statusCode = movie.status;
//     //         message = `Ошибка: ${movie.status}, ${movie.message}`;
//     //       }
//     //     }
//     //   }

//     // try {
//     //     movies = await api.getMovies('movie', '2000-2023');
//     // } catch (error) {
//     //     console.log(error);
//     // }

//     return {
//         props: { movies },
//     }
// }


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
   
    const limit = 24;
    const states = store.getState()
     const { filters } = states;
   
    if (ctx.query.genre || ctx.query.years || ctx.query.rating) {
        const filtersNew = {
            genre: ctx.query.genre ? `genres.name=${ctx.query.genre}` : filters.genre,
            years: ctx.query.years ? `year=${ctx.query.years}` : filters.years,
            rating: ctx.query.rating ? `rating.kp=${ctx.query.rating}` : filters.rating,
        }
        await store.dispatch(filtersMovies.initiate({ filters:{
            genre: ctx.query.genre ? `genres.name=${ctx.query.genre}` : filters.genre,
            years: ctx.query.years ? `year=${ctx.query.years}` : filters.years,
            rating: ctx.query.rating ? `rating.kp=${ctx.query.rating}` : filters.rating,
        }, limit }));
        await store.dispatch(filterGenre({ genre: filters.genre }))
        await store.dispatch(filterRating({ rating: filters.rating }))
        await store.dispatch(filterYears({ years: filters.years }))
        return { props: { initialReduxState: store.getState() } };
    }
    else {
        await store.dispatch(filtersMovies.initiate({ filters, limit }));
        return { props: { initialReduxState: store.getState() } };
    }

})

export default MoviesPage;