/*
Перевірка масиву  
Напиши функцію, яка перевіряє, чи є input масивом.  
Тестові дані:  
console.log(isArray('QA DOJO')); // false  
console.log(isArray([1, 2, 4, 0])); // true  
*/

function isArray(input) {
    return Array.isArray(input);
}
console.log(isArray('QA DOJO'));
console.log(isArray([1, 2, 4, 0]));