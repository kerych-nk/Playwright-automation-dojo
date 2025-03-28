/*
Дефіси між парними числами   
Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:  
Ввід: 025468  
Вивід: 0-254-6-8
*/

import test, { expect } from "@playwright/test";

function insertDashes(number: string): string {
    let result = "";
    number += "";

    for (let i = 0; i < number.length; i++) {
        result += number[i]
       
        if (
            i + 1 < number.length &&
            Number(number[i]) % 2 === 0 &&
            Number(number[i + 1]) % 2 === 0) {
            result += "-";
        }
    }
    return result;
}

test.describe('insert dashes function tests', () => {
    test('add dashes between even numbers', async () => {
        const input = '025468';
        const output = insertDashes(input);
        expect(output).toBe('0-254-6-8')
    });

    test(`doesn't insert dashes if no 2 even numbers`, async () => {
        const input = '0245';
        const output = insertDashes(input);
        expect(output).toBe('0-2-45');
    });

    test(`doesn't change the string if there are no even numbers`, async () => {
        const input = '13579';
        const output = insertDashes(input);
        expect(output).toBe('13579');
    });

    test('should work correct with 1 number', async () => {
        const input = '8';
        const output = insertDashes(input);
        expect(output).toBe('8');
    });

    test('should work correct with empty string', async () => {
        const input = '';
        const output = insertDashes(input);
        expect(output).toBe('');
    });
});
