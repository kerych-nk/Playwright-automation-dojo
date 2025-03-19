function checkNumberType(num) {
    if (num > 0) {
        return "Число додатнє.";
    } else if (num < 0) {
        return "Число від’ємне.";
    } else {
        return "Число дорівнює нулю.";
    }
}
const result = checkNumberType(1);
console.log(result)