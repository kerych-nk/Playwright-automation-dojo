function trafficLight(color) {
    if (color === "green") {
        return "переходьте";
    } else if (color === "yellow") {
        return "підготуйтеся";
    } else if (color === "red") {
        return "зачекайте";
    }
}
const result = trafficLight("green");
console.log(result);