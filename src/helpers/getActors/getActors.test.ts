import { getActors } from "./getActors";
import {actorsListOne, actorsListTwo, actorsListThree} from '../../assets/dataForTests/getActors';

describe('перечисление актеров', () => {
    test('в массиве данных есть актеры', () => {
        expect(getActors(actorsListOne)).toBe('Мэттью МакКонахи, Чарли Ханнэм');
    });
    test('в массиве данных нет актеров', () => {
        expect(getActors(actorsListTwo)).toBe('');
    });
    test('пустой массив данных', () => {
        expect(getActors(actorsListThree)).toBe('');
    });
});