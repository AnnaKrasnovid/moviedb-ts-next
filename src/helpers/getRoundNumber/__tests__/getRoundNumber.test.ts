import { getRoundNumber } from "../getRoundNumber";

describe('верное округление числа', () => {
    test('корректное значение', () => {
        expect(getRoundNumber(10.31111)).toBeCloseTo(10.3);
    });    
    test('корректное значение', () => {
        expect(getRoundNumber(0.48)).toBeCloseTo(0.5);
    });  
    test('корректное значение', () => {
        expect(getRoundNumber(8.0000009)).toBeCloseTo(8);
    }); 
    test('корректное значение', () => {
        expect(getRoundNumber(-8)).toBeCloseTo(-8);
    });
});

