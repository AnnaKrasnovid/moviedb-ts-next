import { getString } from "./getString";
import { listOne, listTwo, listThree, listFour } from "../../assets/dataForTests/getString";

describe('получение строки параметров', () => {
    test('передаем массив объектов только с truthy ключами value', () => {
        expect(getString(listOne)).toBe('one / two / three');
    });
    test('передаем массив объектов с разными ключами value(и пустыми)', () => {
        expect(getString(listTwo)).toBe('one / three / four');
    });
    test('передаем массив, 1 объект с ключом value', () => {
        expect(getString(listThree)).toBe('one');
    });
    test('передаем массив, объект без ключа value', () => {
        expect(getString(listFour)).toBe('');
    });
    test('пустой массив', () => {
        expect(getString([])).toBe('');
    });
});