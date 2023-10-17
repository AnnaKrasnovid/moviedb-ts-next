import React, { useContext } from 'react';
import Link from 'next/link';

import MovieCard from '../MovieCard/MovieCard';
import GridMovies from '../GridMovies/GridMovies';

import { ModalsContext } from '../../context/ModalsContext';
import { routes } from '../../settings/routes';
import { MovieBaseInt } from '../../settings/interfaces';

function MoviesList({ list }: any) {
  const { closePopupSearch } = useContext(ModalsContext);

  return (
    <GridMovies>
      {list.length > 0 && list.map((item: MovieBaseInt) => (
        <li key={item.id} onClick={closePopupSearch}>
          <Link href={`${routes.MOVIE}/${item.id}`} className='link'>
            <MovieCard item={item} />
          </Link>
        </li>
      ))}
    </GridMovies>
  );
}

export default MoviesList;
