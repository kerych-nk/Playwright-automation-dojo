function votingAge (age) {
    if (age >= 18) {
        return "Ви можете голосувати.";
    } else {
        return "Ви ще не можете голосувати.";
    }
}
const result = votingAge(18);
console.log(result);