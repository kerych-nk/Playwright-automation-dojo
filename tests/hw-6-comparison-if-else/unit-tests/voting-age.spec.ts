import test, { expect } from "@playwright/test";

function votingAge (age: number) {
    if (age >= 18) {
        return "Ви можете голосувати.";
    } else {
        return "Ви ще не можете голосувати.";
    }
}

test.describe("voting age messages", () => {
    test("positive message appear", async () => {
        const result = votingAge(18);
        expect(result).toContain("Ви можете голосувати.");
    });

    test("negative message appear", async () => {
        const result = votingAge(17);
        expect(result).toBe("Ви ще не можете голосувати.");
    });
});