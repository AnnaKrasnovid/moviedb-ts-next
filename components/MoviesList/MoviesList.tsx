import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import MovieCard from '../MovieCard/MovieCard';

import styles from  './MoviesList.module.scss';

function MoviesList({ list }: any) {
  const [movies, setMovies] = useState([]);

  return (
    <section className={styles['movies']}>
      <ul className='movies__list'>
        {list.map((item: any) => (
          <li key={item.id}>
            {/* state={{ movie: item }} */}
            <Link href={`${item.id}`}  className='link'>
              <MovieCard item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
