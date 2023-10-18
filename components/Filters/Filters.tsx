import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { selectGenresList, selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { useActions } from '../../hooks/useActions';

import styles from './Filters.module.scss';

function Filters() {
    const { filterGenre, filterRating, filterYears,setPage } = useActions()
    const filters = useSelector((state: any) => state.filters)
    const page = useSelector((state: any) => state.pagination)
    const router = useRouter();
    const [genre, setGenre] = useState<any>('');
    const [years, setYears] = useState<any>('');
    const [rating, setRaiting] = useState<any>('');
    // const [sort, setSort] = useState<string>('');

    function getFiltersMovies() {
        router.query.genre = genre;
        router.query.years = years;
        router.query.rating = rating;
        // router.query.page = page.page;
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
        // if (router.query.page) {
        //     setPage({ page: router.query.page });
        // }
    }, [router])
    console.log(router, page.page)

    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} defaultValue={filters.genre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} defaultValue={filters.years} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} defaultValue={filters.rating} />
            {/* <Select options={selectSortList} callback={(value) => setSort(value)}  defaultValue={selectSortList[0].title} /> */}
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;