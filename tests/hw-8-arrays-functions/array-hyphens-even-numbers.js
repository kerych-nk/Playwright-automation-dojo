/*
Дефіси між парними числами   
Програма, що додає дефіси між парними числами.   (завдання із зірочкою ⭐️)
Приклад:  
Ввід: 025468  
Вивід: 0-254-6-8
*/

function insertDashes(number) {
    let result = "";
    number += ""

    for (let i = 0; i < number.length; i++) {
        result += number[i]
       

        if (number[i+1] % 2 === 0 && (number[i] % 2 === 0)) {
            result += "-";
        }
    }
    return result
}
const result = insertDashes('025468');
console.log(result)