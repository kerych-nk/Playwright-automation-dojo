function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even number";
    } else {
        return "Odd number";
    }
}

const result = checkEvenOrOdd(8);
console.log(result);