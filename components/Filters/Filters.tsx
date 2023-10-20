import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { selectGenresList, selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { useActions } from '../../hooks/useActions';
import styles from './Filters.module.scss';


function Filters() {
    const router = useRouter();   
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
        setGenre(router.query.genre);
        setYears(router.query.years);
        setRaiting(router.query.rating);
    }, [])

    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} defaultValue={router.query.genre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} defaultValue={router.query.years} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} defaultValue={router.query.rating} />
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;