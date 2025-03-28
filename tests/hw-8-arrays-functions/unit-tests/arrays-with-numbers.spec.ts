/*
Числа від 1 до 345
Використай цикл, щоб створити масив з числами  від 1 до 345.
*/

import test, { expect } from "@playwright/test";

function arrayWithNumbers(): number[] {
    const arr: number[] = [];
    for(let i = 1; i <= 345; i++){
        arr.push(i);
    }
    return arr;
}

test.describe('array with numbers from 1 to 345', () => {
    test('should return array with 345', async () => {
        const result = arrayWithNumbers();
        expect(result.length).toBe(345);
    });

    test('first and last element', async () => {
        const result = arrayWithNumbers();
        expect(result[0]).toBe(1);
        expect(result[result.length -1]).toBe(345);
    });

    test('the sequence of elements', async () => {
        const result = arrayWithNumbers;
        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toBe(i + 1);
        }
    });
});