import { checkEmptyObject } from "../checkEmptyObject";

const objOne = { keyOne: 1, keyTwo: '2' }

describe('проверить пустой ли объект', () => {
    test('', () => {
        expect(checkEmptyObject(objOne)).toBe(false);
    });
    test('', () => {
        expect(checkEmptyObject({})).toBe(true);
    });
});