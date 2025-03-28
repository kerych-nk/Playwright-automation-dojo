/*
Сортування масиву  
✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
Приклад:  
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
// Вивід: -4,-3,1,2,3,5,6,7,8    
ЦИКЛИ
*/

import test, { expect } from "@playwright/test";

function sortNumbers(arr: number[]): number[] {
    let array = arr.slice();
    
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++){

            if(array[j] > array[j + 1]) {
                let prev = array[j];
                array[j] = array[j + 1];
                array[j + 1] = prev;
            };
        };
    };
        
    return array;
};

test.describe('sorting numbers function tests', () => {
    test('sorts an array that contains both negative and positive numbers', async () => {
        const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
        const sorted = sortNumbers(arr1);
        expect(sorted).toEqual([-4, -3, 1, 2, 3, 5, 6, 7, 8]);
    });

    test('works correctly with empty array', async () => {
        const arr: number[] = [];
        const sorted = sortNumbers(arr);
        expect(sorted).toEqual([]);
    });

    test('works correctly if array contains one element', async () => {
        const arr = [42];
        const sorted = sortNumbers(arr);
        expect(sorted).toEqual([42]);
    });

    test('should sort an array with repeating values', async () => {
        const arr = [5, 2, 2, 8, 5, 5, 1];
        const sorted = sortNumbers(arr);
        expect(sorted).toEqual([1, 2, 2, 5, 5, 5, 8]);
    });
});