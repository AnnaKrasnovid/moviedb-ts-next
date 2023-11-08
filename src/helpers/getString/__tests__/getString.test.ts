import { getString } from "../getString";

export const listOne = [{ value: 'one' }, { value: 'two' }, { value: 'three' },];
export const listTwo = [
    { value: 'one', name: '1' }, { value: '', name: 2 },
    { value: 'three', id: 3 }, { value: 'four', name: '4' },
];
export const listThree = [{ value: 'one', name: '1' },];
export const listFour = [{ name: '1' },];

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