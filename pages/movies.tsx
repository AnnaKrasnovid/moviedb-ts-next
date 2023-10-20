import { GetStaticProps  } from 'next';
import store from '../store';
import { filtersMovies } from '../services/MoviesApi';

import Layout from '../layout/Layout/Layout';
import Movies from '../components/Movies/Movies';

// import { MoviesPageInt } from '../settings/interfaces';
import { moviesApi } from '../services/MoviesApi';

import api from '../tools/api';

function MoviesPage({initialReduxState}:any) {
    // console.log(initialReduxStat)
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


export const getStaticProps:GetStaticProps   = async () => {
    const genre = `` ;
    const years =  'year=2000-2023';
    const rating = 'rating.kp=7-10';
    const limit = 24;
    const movieType = `type=movie`; 
    

    await store.dispatch(filtersMovies.initiate({genre, years, rating, movieType, limit}));

	return { props: { initialReduxState: store.getState() } };
  
    
  };

  export default MoviesPage;