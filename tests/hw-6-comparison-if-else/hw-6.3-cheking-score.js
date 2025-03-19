function checkScore(score) {
    if (score >=50) {
        return "Тест складено";
    } else {
        return "Тест не складено";
    }
}
const result = checkScore(5);
console.log(result)