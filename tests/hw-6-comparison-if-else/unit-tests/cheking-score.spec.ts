import test, { expect } from "@playwright/test";

function checkScore(score: number) {
    if (score >= 50) {
        return "Тест складено";
    } else {
        return "Тест не складено";
    }
}

test.describe("check the score for test", () => {
    test("hw6-1 should return 'Тест складено' if score >= 50", async () => {
        const result = checkScore(50);
        expect(result).toBe("Тест складено");
    });

    test("hw6-2 should return 'Тест не складено' if score < 50", async () => {
        const result = checkScore(49);
        expect(result).toBe("Тест не складено");
    });
});