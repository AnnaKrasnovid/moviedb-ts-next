import { getQueryParams } from "../getQueryParams";

describe('получение query params', () => {
    test('получение функцией аргументов !== "" ', () => {
        expect(getQueryParams('детектив', '1980-2000', '5-10')).toMatchObject({
            genre: 'genres.name=детектив',
            years: 'year=1980-2000',
            rating: 'rating.kp=5-10'
        });
    });
    test('получение функцией аргументов в т.ч. и "" ', () => {
        expect(getQueryParams('детектив', '', '')).toMatchObject({
            genre: 'genres.name=детектив',
            years: 'year=2000-2023',
            rating: 'rating.kp=7-10'
        });
    });
    test('получение функцией аргументов === ""', () => {
        expect(getQueryParams('', '', '')).toMatchObject({
            genre: '',
            years: 'year=2000-2023',
            rating: 'rating.kp=7-10'
        });
    });
    test('получение функцией аргументов c undefined', () => {
        expect(getQueryParams(undefined, '', '')).toMatchObject({
            genre: '',
            years: 'year=2000-2023',
            rating: 'rating.kp=7-10'
        });
    });
    test('получение функцией аргументов undefined', () => {
        expect(getQueryParams(undefined, undefined, undefined)).toMatchObject({
            genre: '',
            years: 'year=2000-2023',
            rating: 'rating.kp=7-10'
        });
    });   
});