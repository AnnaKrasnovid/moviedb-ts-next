import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { selectGenresList, selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { filterYears, filterGenre, filterRating } from '../../store/FiltersSlise';

import styles from './Filters.module.scss';

function Filters() {
    const dispatch = useDispatch();
    const filters = useSelector((state: any) => state.filters)
    const router = useRouter();
    const [genre, setGenre] = useState<any>('');
    const [years, setYears] = useState<any>('');
    const [rating, setRaiting] = useState<any>('');
    // const [sort, setSort] = useState<string>('');

    function getFiltersMovies() {
        dispatch(filterYears({ years }))
        dispatch(filterGenre({ genre }))
        dispatch(filterRating({ rating }))
        console.log(genre, years, rating)
        // router.query.genre = genre;
        // router.query.year = years;
        // router.query.rating = rating;
        // router.push(router);
    }

    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} defaultValue={filters.genre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} defaultValue={filters.year} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} defaultValue={filters.rating} />
            {/* <Select options={selectSortList} callback={(value) => setSort(value)}  defaultValue={selectSortList[0].title} /> */}
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;