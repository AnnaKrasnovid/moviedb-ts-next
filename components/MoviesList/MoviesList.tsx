import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MovieCard from '../MovieCard/MovieCard';

import styles from  './MoviesList.module.scss';

function MoviesList({ list }: any) {
  const [movies, setMovies] = useState([]);
  const {asPath}=useRouter();

  return (
    <section className={styles['movies']}>
      <ul className={styles['movies__list']}>
        {list.map((item: any) => (
          <li key={item.id}>
            {/* state={{ movie: item }} */}
            <Link href={`${asPath}/${item.id}`}  className='link'>              
              <MovieCard item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
