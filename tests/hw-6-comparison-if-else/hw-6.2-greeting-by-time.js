function greetingByTime(hour) {
    if (hour < 12) {
        return "Доброго ранку!";
    }
    else if (hour <= 18) {
        return "Доброго дня!";
    }
    else {
        return "Доброго вечора!";
    }
}
const greeting = greetingByTime(12);
console.log(greeting);