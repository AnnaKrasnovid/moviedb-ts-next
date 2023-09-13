import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Select from '../../UI/Select/Select';
import Button from '../../UI/Button/Button';

import { getCurrentYear } from '../../tools/utils';
import { routes } from '../../settings/routes';

import styles from './Filters.module.scss';

interface FiltersInt {
    callback: (genre: string, years: string, rating: string) => void,
}

function Filters({ callback }: FiltersInt) {
    const { pathname, query, push } = useRouter();
    const [genre, setGenre] = useState<string>('');
    const [years, setYears] = useState<string>('');
    const [rating, setRaiting] = useState<string>('');
    const [defaultValueGenre, setDefaultValueGenre] = useState<string>('');
    // const [sort, setSort] = useState<string>('');
//   console.log(useRouter())
    const selectGenresList = [
        { id: '0', title: 'Все', value: '' },
        { id: '1', title: 'Боевик', value: 'боевик' },
        { id: '2', title: 'Военный', value: 'военный' },
        { id: '3', title: 'Детектив', value: 'детектив' },
        { id: '4', title: 'Семейный', value: 'семейный' },
        { id: '5', title: 'Драма', value: 'драма' },
        { id: '6', title: 'Комедия', value: 'комедия' },
        { id: '7', title: 'Криминал', value: 'криминал' },
        { id: '8', title: 'Мелодрама', value: 'мелодрама' },
        { id: '9', title: 'Триллер', value: 'триллер' },
        { id: '10', title: 'Ужасы', value: 'ужасы' },
        { id: '11', title: 'Фантастика', value: 'фантастика' },
        { id: '12', title: 'Фэнтези', value: 'фэнтези' },
    ]

    const selectYearsList = [
        { id: '0', title: 'Все годы', value: '' },
        { id: '1', title: `2022-${getCurrentYear()}`, value: `2022-${getCurrentYear()}` },
        { id: '2', title: '2020-2023', value: '2020-2023' },
        { id: '3', title: '2010-2019', value: '2010-2019' },
        { id: '4', title: '2000-2009', value: '2000-2009' },
        { id: '5', title: '1990-1999', value: '1990-1999' },
        { id: '6', title: '1980-1989', value: '1980-1989' },
        { id: '7', title: '1970-1979', value: '1970-1979' },
        { id: '8', title: '1960-1969', value: '1960-1969' },
        { id: '9', title: 'до 1960', value: `1900-1960` },
    ]

    const selectRatingList = [
        { id: '0', title: 'Любой рейтинг', value: '' },
        { id: '1', title: 'Больше 9', value: '9-10' },
        { id: '2', title: 'Больше 8', value: '8-10' },
        { id: '3', title: 'Больше 7', value: '7-10' },
        { id: '4', title: 'Больше 6', value: '6-10' },
        { id: '5', title: 'Больше 5', value: '5-10' },
    ]

    const selectSortList = [
        { id: '0', title: 'Рекомендуемые', value: '-' },
        { id: '1', title: 'По рейтингу', value: '' },
        { id: '2', title: 'По дате выхода', value: '' },
    ]

    function getFiltersMovies() {
        const genreFilter = genre !== '' ? `genres.name=${genre}` : '';
        const yearFilter = years !== '' ? `year=${years}` : '';
        const ratingFilter = rating !== '' ? `rating.kp=${rating}` : '';

        callback(genreFilter, yearFilter, ratingFilter);
// push(`${routes.GENRES}/${genre}`)
    }

    function getGenre() {
        selectGenresList.find((i, index) => {
            if (i.value === query.genre) {                
                setDefaultValueGenre(selectGenresList[index].title);
                setGenre(selectGenresList[index].value)
                // console.log(selectGenresList[index].value)
            } else if (query.genre === undefined) {
                setDefaultValueGenre(selectGenresList[0].title);
            }
        })
    }

    useEffect(() => {
        getGenre()        
    }, [genre,query.genre])

    useEffect(() => {
        getFiltersMovies()
    }, [genre])
    // console.log(useRouter())
    return (
        <div className={styles['filters']}>
            <Select options={selectGenresList} callback={(value) => setGenre(value)} placeholder='Жанры' defaultValue={defaultValueGenre} />
            <Select options={selectYearsList} callback={(value) => setYears(value)} placeholder='Годы выхода' defaultValue={selectYearsList[0].title} />
            <Select options={selectRatingList} callback={(value) => setRaiting(value)} placeholder='Рейтинг' defaultValue={selectRatingList[0].title} />
            {/* <Select options={selectSortList} callback={(value) => setSort(value)} placeholder='Рекомендуемые' defaultValue={selectSortList[0].title} /> */}
            <Button title='Найти' callback={getFiltersMovies} />
        </div>
    )
}

export default Filters;