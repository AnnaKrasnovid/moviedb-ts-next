import React from 'react';
import Link from 'next/link';

import MovieCard from '../MovieCard/MovieCard';
import GridMovies from '../GridMovies/GridMovies';

import { routes } from '../../settings/routes';
import { MovieBaseInt } from '../../settings/interfaces';

function MoviesList({ list }: any) {
  return (
    <GridMovies>
      {list.length > 0 && list.map((item: MovieBaseInt) => (
        <li key={item.id}>
          <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
            <MovieCard item={item} />
          </Link>
        </li>
      ))}
    </GridMovies>
  );
}

export default MoviesList;
