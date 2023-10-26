import { getDateFormat } from "./getDateFormat";

describe('проверка корректроного формата данных и возвращаемого формата', () => {
    test('корректное значение', () => {
        expect(getDateFormat('1980-04-10T00:00:00.000Z')).toBe('10 апреля 1980 г.');
    });
    test('корректное значение', () => {
        expect(getDateFormat('Thu Apr 10 1980 11:00:00 GMT+1100')).toBe('10 апреля 1980 г.');
    });
    test('корректное значение', () => {
        expect(getDateFormat('04.10.1980')).toBe('10 апреля 1980 г.');// месяц, число, год
    });
    test('пустая строка', () => {
        expect(getDateFormat('')).toBe('');
    });
    test('не корректный тип даты', () => {
        expect(getDateFormat('сегодня')).toBe('');
    });
});
