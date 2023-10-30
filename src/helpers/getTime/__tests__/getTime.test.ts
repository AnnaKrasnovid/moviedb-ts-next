import { getTime } from "../getTime";

describe('получение времени в формате 00ч. 00мин.', () => {
    test('получение ч. и мин.', () => {
        expect(getTime(128)).toBe('2ч. 08 мин.');
    });
    test('получение мин.', () => {
        expect(getTime(48)).toBe('48 мин.');
    });
    test('получение необходимого формата мин.', () => {
        expect(getTime(8)).toBe('08 мин.');
    });
    test('0 мин', () => {
        expect(getTime(0)).toBe('00 мин.');
    });   
    test('передано отрицательное число', () => {
        expect(getTime(-48)).toBe('');
    });
});