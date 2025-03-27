/*
Сума чисел від 1 до 100
✏️ Напиши програму, яка знайде суму чисел від 1 до 100.
*/
function sumNumbers() {
    let sum = 0;
    for(let i = 1; i <= 100; i++){
       sum += i;
    }
    return sum;
}
const showSumNumbers = sumNumbers();
console.log(showSumNumbers)