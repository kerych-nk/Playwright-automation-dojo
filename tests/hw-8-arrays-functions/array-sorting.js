/*
Сортування масиву  
✏️ Напиши програму для сортування чисел у масиві.   (завдання із зірочкою ⭐️)
Приклад:  
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];  
// Вивід: -4,-3,1,2,3,5,6,7,8    
ЦИКЛИ
*/

function sortNumbers(arr) {
    let array = arr.slice();
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){

            console.log(array[j], array[j+1]);
            if(array[j] > array[j+1]) {
                let prev = array[j];
                array[j] = array[j+1];
                array[j+1] = prev
            };
        };
    };
        
    return array;
};

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortNumbers(arr1));

const numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(numbers.sort());

console.log(numbers.sort((a, b) => a - b));