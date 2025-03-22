import test, { expect } from "@playwright/test";

function trafficLight(color: string) {
    if (color === "green") {
        return "переходьте";
    } else if (color === "yellow") {
        return "підготуйтеся";
    } else if (color === "red") {
        return "зачекайте";
    }
}
// const result = trafficLight("green");
// console.log(result);
test.describe("selecting correct traffic light", () => {
    test("hw6-12 green color - переходьте", async () => {
        const result = trafficLight("green");
        expect(result).toBe("переходьте");
    });

    test("hw6-13 yellow color - підготуйтесь", async () => {
        const result = trafficLight("yellow");
        expect(result).toBe("підготуйтеся");
    });

    test("hw6-14 red color - зачекайте", async () => {
        const result = trafficLight("red");
        expect(result).toBe("зачекайте");
    });
});