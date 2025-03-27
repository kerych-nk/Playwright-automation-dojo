/*
Числа від 1 до 345
Використай цикл, щоб створити масив з числами  від 1 до 345.
*/

function arrayWithNumbers() {
    const arr = [];
    for(let i = 1; i <= 345; i++){
        arr.push(i);
    }
    return arr;
}
const numbersCount = arrayWithNumbers();
console.log(numbersCount);