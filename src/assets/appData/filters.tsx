import { FilterInt } from "@/settings/interfaces";
import { getCurrentYear } from "@/helpers/getCurrentYear/getCurrentYear";

export const selectGenresList: Array<FilterInt> =  [
    { id: '0', title: 'Все жанры', value: '' },
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

export const selectYearsList: Array<FilterInt> = [
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

export const selectRatingList: Array<FilterInt> = [
    { id: '0', title: 'Любой рейтинг', value: '' },
    { id: '1', title: 'Больше 9', value: '9-10' },
    { id: '2', title: 'Больше 8', value: '8-10' },
    { id: '3', title: 'Больше 7', value: '7-10' },
    { id: '4', title: 'Больше 6', value: '6-10' },
    { id: '5', title: 'Больше 5', value: '5-10' },
]
export const selectSortList: Array<FilterInt> = [
    { id: '0', title: 'Рекомендуемые', value: '-' },
    { id: '1', title: 'По рейтингу', value: '' },
    { id: '2', title: 'По дате выхода', value: '' },
]