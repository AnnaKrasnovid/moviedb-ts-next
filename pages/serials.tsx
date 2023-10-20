import Layout from '../layout/Layout/Layout';
import Movies from '../components/Movies/Movies';


import api from '../tools/api';

function SerialsPage() {
    return (
        <Layout>
            <Movies />
        </Layout>
    );
}

export async function getServerSideProps() {
    let movies: any = {};

    // try {
    //     movies = await api.getMovies('tv-series', '2000-2023');
    // } catch (error) {
    //     console.log(error);
    // }

    return {
        props: { movies },
    }
}

export default SerialsPage;