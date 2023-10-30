import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Select from '@/UI/Select/Select';
import Button from '@/UI/Button/Button';

import { addQueryParams } from '@/helpers/addQueryParams/addQueryParams';
import { selectGenresList, selectYearsList, selectRatingList } from '@/assets/appData/filters';

import styles from './Filters.module.scss';
interface FiltersInt {
    callback: (genre: string, years: string, rating: string) => void
}

function Filters({ callback }: FiltersInt) {
    const router = useRouter();
    const [genre, setGenre] = useState<any>('');
    const [years, setYears] = useState<any>('');
    const [rating, setRaiting] = useState<any>(''); 

    function getFiltersMovies() {
        const filters = { genre, years, rating };
        addQueryParams(router, filters);
        callback(genre, years, rating);
    }

    useEffect(() => {
        setGenre(router.query.genre ? router.query.genre : '');
        setYears(router.query.years ? router.query.years : '');
        setRaiting(router.query.rating ? router.query.rating : '');
    }, [])

    return (
        <div className={styles['filters']}>
            <Select
                options={selectGenresList}
                callback={(value) => setGenre(value)}
                placeholder='Жанры'
                defaultValue={genre}
            />
            <Select
                options={selectYearsList}
                callback={(value) => setYears(value)}
                placeholder='Годы выхода'
                defaultValue={years}
            />
            <Select
                options={selectRatingList}
                callback={(value) => setRaiting(value)}
                placeholder='Рейтинг'
                defaultValue={rating}
            />
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;