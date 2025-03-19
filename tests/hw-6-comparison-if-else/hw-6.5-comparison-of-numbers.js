function compareNumbers(a, b) {
    if (a > b) {
        return "Перше число більше.";
    } else if (a < b) {
        return "Друге число більше.";
    } else {
        return "Числа рівні.";
    }
}
const result = compareNumbers(11, 10);
console.log(result);