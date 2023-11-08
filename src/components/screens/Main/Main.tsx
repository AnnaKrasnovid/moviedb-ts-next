import Link from 'next/link';

import Lead from '@/components/Lead/Lead';
import Compilation from '@/components/Сompilation/Compilation';
import DescriptionMovieCard from '@/components/DescriptionMovieCard/DescriptionMovieCard';
import Loader from '@/UI/Loader/Loader';

import { routes } from '@/settings/routes';
import { MainPageInt } from '@/settings/interfaces';

import styles from './Main.module.scss';

function Main({ movieRating, cartoons, series, movieRandom }: MainPageInt) {
  return (
    <>
      <Lead />
      <div className={styles['main-page']}>
        <Compilation title='Фильмы с высоким рейтингом' moviesList={movieRating.docs} link={routes.MOVIES} />
        <Compilation title='Сериалы' moviesList={series.docs} link={routes.SERIALS} />
        <Compilation title='Мультфильмы' moviesList={cartoons.docs} link={routes.CARTOONS} />
      </div>
      {typeof movieRandom !== 'string'
        ? (
          <Link href={`${routes.MOVIE}/${movieRandom.id}`}>
            <DescriptionMovieCard movie={movieRandom} />
          </Link>
        )
        : <Loader />
      }
    </>
  )
}

export default Main;
