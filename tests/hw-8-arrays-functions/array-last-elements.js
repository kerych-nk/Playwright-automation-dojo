/*
Останні елементи масиву  
Напиши функцію для отримання останніх n елементів масиву.  
Тестові дані:  
console.log(last([7, 9, 0, -2])); // -2  
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]  
*/
function last(array, n) {
    if (n === undefined) {
        return array[array.length -1];
    }
    if ( n <= 0) {
        return [];
    }
    return array.slice(-n);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));