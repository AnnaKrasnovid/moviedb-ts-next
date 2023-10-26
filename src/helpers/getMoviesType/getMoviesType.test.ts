import { getMoviesType } from "./getMoviesType";

describe('получить тип фильма', () => {
    test('корректное значение-serials', () => {
        expect(getMoviesType('/serials')).toBe('tv-series');
    });    
    test('корректное значение-cartoons', () => {
        expect(getMoviesType('/cartoons')).toBe('cartoon');
    }); 
    test('пустая строка', () => {
        expect(getMoviesType('')).toBe('movie');
    });    
});