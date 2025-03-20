import test, { expect } from "@playwright/test";

function checkScore(score: number) {
    if (score >= 50) {
        return "Тест складено";
    } else {
        return "Тест не складено";
    }
}

test.describe("check the score for test", () => {
    test("shoud return 'Тест складено' if score >= 50", async () => {
        const result = checkScore(50);
        expect(result).toBe("Тест складено");
    });

    test("should return 'Тест не складено' if score < 50", async () => {
        const result = checkScore(49);
        expect(result).toBe("Тест не складено");
    });
});