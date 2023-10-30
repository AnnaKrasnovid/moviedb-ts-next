import { getInfo } from "../getInfo";
import { NameInt } from "@/settings/interfaces";

const infoOne: Array<NameInt> = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
]

describe('получение строки параметров', () => {
    test('корректное значение', () => {
        expect(getInfo(infoOne)).toBe('one, two, three');
    });
    test('пустой массив', () => {
        expect(getInfo([])).toBe('');
    });
});