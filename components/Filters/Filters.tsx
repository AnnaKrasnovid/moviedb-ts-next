import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { getCurrentYear } from '../../tools/utils';
import { FilterInt } from '../../settings/interfaces';
import { selectGenresList,selectYearsList, selectRatingList } from '../../assets/appData/filters';
import { filterYears, filterGenre, filterRating } from '../../store/FiltersSlise';

import styles from './Filters.module.scss';

function Filters() {
    const dispatch=  useDispatch();
    const selector=useSelector((state:any)=> state.filters)
    console.log(selector)
    const router = useRouter();
    const [genre, setGenre] = useState<any>('');
    const [years, setYears] = useState<any>('');
    const [rating, setRaiting] = useState<any>('');
    const [defaultValueGenre, setDefaultValueGenre] = useState<string>('');
    const [defaultValueRating, setDefaultValueRating] = useState<string>('');
    const [defaultValueYears, setDefaultValueYears] = useState<string>('');
    // const [sort, setSort] = useState<string>('');

    function getFiltersMovies() {
        dispatch(filterYears({years}))
        dispatch(filterGenre({genre}))
        dispatch(filterRating({rating}))

        // router.query.genre = genre;
        // router.query.year = years;
        // router.query.rating = rating;
        // router.push(router);
    }

    function getGenre(list: Array<FilterInt>, param: (string | undefined), setState: any) {
        list.find((i: FilterInt, index: number) => {
            if (i.value === param) {
                setState(list[index].title)
            } else if (param === undefined) {
                setState(list[0].title)
            }
        })
    }

    useEffect(() => {
        // для селектов если уже была фильтрация
        // @ts-ignore
        getGenre(selectGenresList, genre, setDefaultValueGenre)
        // @ts-ignore
        getGenre(selectYearsList, years, setDefaultValueYears)
        // @ts-ignore
        getGenre(selectRatingList, rating, setDefaultValueRating)
    }, [years,genre,rating])

    // useEffect(() => {
    //     // при монтировании если есть query параметры
    //     if (router.query.genre || router.query.year || router.query.rating) {
    //         setGenre(router.query.genre)
    //         setYears(router.query.year)
    //         setRaiting(router.query.rating)
    //     }
    // }, [])


    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} placeholder='Жанры' defaultValue={selector.genre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} placeholder='Годы выхода' defaultValue={selector.year} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} placeholder='Рейтинг' defaultValue={selector.rating} />
            {/* <Select options={selectSortList} callback={(value) => setSort(value)} placeholder='Рекомендуемые' defaultValue={selectSortList[0].title} /> */}
            <Button text='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;