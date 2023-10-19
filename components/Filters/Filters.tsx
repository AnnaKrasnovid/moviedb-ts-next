import React, { useEffect, useState

 } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { selectGenresList, selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { useActions } from '../../hooks/useActions';

import styles from './Filters.module.scss';

function Filters() {
    const router = useRouter();
    const { filterGenre, filterRating, filterYears } = useActions();
    const filters = useSelector((state: any) => state.filters);
    const [genre, setGenre] = useState<any>('');
    const [years, setYears] = useState<any>('');
    const [rating, setRaiting] = useState<any>('');

    function getFiltersMovies() {
        router.query.genre = genre;
        router.query.years = years;
        router.query.rating = rating;
        router.push(router);
    }

    useEffect(() => {
        if (router.query.genre) {
            filterGenre({ genre: router.query.genre });
            setGenre(router.query.genre)
        }
        if (router.query.years) {
            filterYears({ years: router.query.years });
            setYears(router.query.years)
        }
        if (router.query.rating) {
            filterRating({ rating: router.query.rating });
            setRaiting(router.query.rating)
        }
    }, [])
    
    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} defaultValue={filters.genre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} defaultValue={filters.years} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} defaultValue={filters.rating} />            
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;