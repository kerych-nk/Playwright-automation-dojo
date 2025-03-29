import test, { expect } from "@playwright/test";

/*
Перші елементи масиву  
Напиши функцію для отримання перших n елементів масиву.  
Тестові дані:  
console.log(first([7, 9, 0, -2])); // 7  
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    
*/
function first(array: unknown[], n?: number) {
    if (n === undefined) {
        return array[0];
    }
    if (n <= 0) {
        return [];
    }
    return array.slice(0, n);
}

test.describe('first element from array', () => {
    test('hw8-3 should return first element from array if n is not specified', async () => {
        const arr = ([7, 9, 0, -2]);
        const result = first(arr);
        expect(result).toEqual(7);
    });

    test('hw8-4 should return first n elements if n > 0', async () => {
        const arr = ([7, 9, 0, -2]);
        const result = first(arr, 3);
        expect(result).toEqual([7, 9, 0]);
    });

    test('hw8-5 should return an empty array if n <= 0', async () => {
        const arr = ([7, 9, 0, -2]);
        const result = first(arr, 0);
        expect(result).toEqual([]);

        const resultNegative = first(arr, -1);
        expect(resultNegative).toEqual([]);
    });

    test('hw8-6 should returns an empty array if the source array is empty', async () => {
        const arr: number[] = [];
        const resultUndefined = first(arr);
        expect(resultUndefined).toBeUndefined();
    });
});