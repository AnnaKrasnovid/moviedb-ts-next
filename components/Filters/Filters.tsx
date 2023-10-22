import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { selectGenresList, selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { useActions } from '../../hooks/useActions';

import styles from './Filters.module.scss';

function Filters() {
    const { filterGenre, filterRating, filterYears } = useActions()
    const filters = useSelector((state: any) => state.filters)
    const router = useRouter();
    // const filtersRedux = useSelector((state: any) => state.filters)
    const [genreValue, setGenreValue] = useState<any>('');
    const [yearsValue, setYearsValue] = useState<any>('');
    const [ratingValue, setRaitingValue] = useState<any>('');

    function getFiltersMovies() {
        const genre = genreValue ? `genres.name=${genreValue}` : '';
        const years = yearsValue ? `year=${yearsValue}` : 'year=2000-2023';
        const rating = ratingValue ? `rating.kp=${ratingValue}` : 'rating.kp=6-10';
        // const limit = currentPage * MOVIES_LIMIT;

        filterGenre({ genre })
        filterRating({ rating })
        filterYears({ years })

        router.push({
            ...router,
            query: {
                ...router.query,
                genre: genreValue,
                years: yearsValue,
                rating: ratingValue
            },
        }, undefined, { shallow: true }
        );
    }

    useEffect(() => {
        if (router.query.genre || router.query.years || router.query.rating) {
            setGenreValue(router.query.genre ? router.query.genre : '')
            setRaitingValue(router.query.rating ? router.query.rating : '')
            setYearsValue(router.query.years ? router.query.years : '')
        }
    }, [])

    // function getFiltersMovies() {
    //     router.query.genre = genre;
    //     router.query.years = years;
    //     router.query.rating = rating;
    //     router.push(router);
    // }

    // useEffect(() => {
    //     setGenre(router.query.genre);
    //     setYears(router.query.years);
    //     setRaiting(router.query.rating);
    // }, [])

    // console.log(genreValue)

    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenreValue(value)} defaultValue={genreValue} />
            <Select options={selectYearsList} callback={(value) => setYearsValue(value)} defaultValue={yearsValue} />
            <Select options={selectRatingList} callback={(value) => setRaitingValue(value)} defaultValue={ratingValue} />
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;