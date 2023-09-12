import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import api from '../tools/api';

function CartoonsPage({ cartoons }: any) {
    return (
        <Layout>
            <MoviesList list={cartoons.docs} pages={cartoons.pages}/>
        </Layout>
    );
}

export async function getServerSideProps() {
    let cartoons: any = {};

    try {
        cartoons = await api.getMovies('cartoon', '2000-2023');
    } catch (error) {
        console.log(error);
    }
    
    return {
        props: { cartoons },
    }
}

export default CartoonsPage;