import test, { expect } from "@playwright/test";

function greetingByTime(hour: number) {
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

test.describe("should return correct greetings", () => {
    test("should return 'Доброго ранку' if < 12", async () => {
        const result = greetingByTime(11);
        expect(result).toBe("Доброго ранку!");
    });

    test("should return 'Доброго дня!' if <= 18", async () => {
        const result = greetingByTime(12);
        expect(result).toBe("Доброго дня!");
    });

    test("should return 'Доброго вечора!' if > 18", async () => {
        const result = greetingByTime(19);
        expect(result).toBe("Доброго вечора!");
    });
});