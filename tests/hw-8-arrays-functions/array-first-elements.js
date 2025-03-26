/*
Перші елементи масиву  
Напиши функцію для отримання перших n елементів масиву.  
Тестові дані:  
console.log(first([7, 9, 0, -2])); // 7  
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]    
*/
function first(array, n) {
    if (n === undefined) {
        return array[0];
    }
    if (n <= 0) {
        return [];
    }
    return array.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], 3));