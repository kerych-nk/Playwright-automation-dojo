/*
Числа від 241 до 1
✏️ Використай цикл, щоб створити масив з числами у зворотному порядку від 241 до 1. 
*/
function reverseNumbers() {
    const arr = [];
    for(let i = 241; i >= 1; i--){
        arr.push(i);
    }
    return arr;
}
const returnReverseNumbers = reverseNumbers();
console.log(returnReverseNumbers);