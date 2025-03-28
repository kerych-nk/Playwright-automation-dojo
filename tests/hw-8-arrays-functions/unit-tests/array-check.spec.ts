/*
Перевірка масиву  
Напиши функцію, яка перевіряє, чи є input масивом.  
Тестові дані:  
console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true  
*/

import test, { expect } from "@playwright/test";


function isArray(input: unknown) {
    return Array.isArray(input);
}

test.describe('check that input is array or not', () => {
    test('hw8-1 input should be an array', async () => {
        const input = [1, 2, 4, 0];
        const result = isArray(input);
        expect(result).toBeTruthy();
    });

    test('hw8-2 input is not an array', async () => {
        const input = "QA DOJO";
        const result = isArray(input);
        expect(result).toBeFalsy();
    });

    test('hw8-2.1 should return false if = null', async () => {
        const input = null;
        const result = isArray(input);
        expect(result).toBeFalsy();
    });
});