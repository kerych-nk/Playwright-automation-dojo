import test, { expect } from "@playwright/test";

function checkEvenOrOdd(number: number) {
    if (number % 2 === 0) {
        return "Even number";
    } else {
        return "Odd number";
    }
}

test.describe("checkEvenOrOdd", () => {
    test("hw6-6 should return even number", async () => {
        const result = checkEvenOrOdd(8);
        expect(result).toBe("Even number");
    });

    test("hw6-7 should return odd number", async () => {
        const result = checkEvenOrOdd(7);
        expect(result).toBe("Odd number");
    });

    test("hw6-8 should return even number if = 0", async () =>{
        const result = checkEvenOrOdd(0);
        expect(result).toBe("Even number");
    });
});