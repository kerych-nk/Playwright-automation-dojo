/*
Максимальне число з двох
✏️ Напиши програму, яка знаходить найбільше ціле число з двох. Використай if для порівняння.

maxNumber(10, 20); // Вивід: 20  
maxNumber(5, 5); // Вивід: Обидва числа рівні  
maxNumber(-10, 0); // Вивід: 0 
*/

function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Обидва числа рівні"
    }
}
const result1 = maxNumber(10, 20);
console.log(result1);
const result2 = maxNumber(5, 5);
console.log(result2);
const result3 = maxNumber(-10, 0);
console.log(result3);