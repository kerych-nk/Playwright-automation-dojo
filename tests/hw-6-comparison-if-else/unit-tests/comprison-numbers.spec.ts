import test, { expect } from "@playwright/test";

function compareNumbers(a, b) {
    if (a > b) {
        return "Перше число більше.";
    } else if (a < b) {
        return "Друге число більше.";
    } else {
        return "Числа рівні.";
    }
}

test.describe("compare the numbers and return the correct message", () => {
    test("hw6-3 should return 'Перше число більше.' message", async () => {
        const result = compareNumbers(11, 10);
        expect(result).toBe("Перше число більше.")
    });

    test("hw6-4 should return 'Друге число більше.' message", async () => {
        const result = compareNumbers(11, 12);
        expect(result).toBe("Друге число більше.");
    });

    test("hw6-5 should return 'Числа рівні.' message", async () => {
        const result = compareNumbers(13, 13);
        expect(result).toBe("Числа рівні.");
    });
});