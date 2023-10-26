import { getTextYear } from "./getTextYear";

describe('получение склонения: год/лет', () => {
    test('корректное значение', () => {
        expect(getTextYear(1)).toBe('год');
    });
    test('корректное значение', () => {
        expect(getTextYear(2)).toBe('года');
    });
    test('корректное значение', () => {
        expect(getTextYear(5)).toBe('лет');
    });
    test('корректное значение', () => {
        expect(getTextYear(20)).toBe('лет');
    });
    test('корректное значение', () => {
        expect(getTextYear(21)).toBe('год');
    }); 
    test('корректное значение', () => {
        expect(getTextYear(22)).toBe('года');
    }); 
    test('корректное значение', () => {
        expect(getTextYear(25)).toBe('лет');
    });
    test('корректное значение', () => {
        expect(getTextYear(110)).toBe('лет');
    });
    test('не корректное значение', () => {
        expect(getTextYear(0)).toBe('нет данных');
    });
    test('не корректное значение', () => {
        expect(getTextYear(-52)).toBe('некорректные данные');
    });
});