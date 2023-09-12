import Layout from '../layout/Layout/Layout';
import MoviesList from '../components/MoviesList/MoviesList';

import api from '../tools/api';

function SerialsPage({serials}:any) {  
    return (
        <Layout>
            <MoviesList list={serials.docs} pages={serials.pages}/>
        </Layout>
    );
}

export async function getServerSideProps() {
    let serials: any = {};          

    try {
        serials = await api.getMovies('tv-series', '2000-2023'); 
      } catch (error) {
        console.log(error);
      }
   
    return {
        props: { serials },
    }
}

export default SerialsPage;