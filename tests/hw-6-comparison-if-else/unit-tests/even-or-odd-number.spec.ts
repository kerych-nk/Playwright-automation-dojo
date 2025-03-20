import test, { expect } from "@playwright/test";

function checkEvenOrOdd(number: number) {
    if (number % 2 === 0) {
        return "Even number";
    } else {
        return "Odd number";
    }
}

test.describe("checkEvenOrOdd", () => {
    test("should return even number", async () => {
        const result = checkEvenOrOdd(8);
        expect(result).toBe("Even number");
    });

    test("should return odd number", async () => {
        const result = checkEvenOrOdd(7);
        expect(result).toBe("Odd number");
    });

    test("should return even number if = 0", async () =>{
        const result = checkEvenOrOdd(0);
        expect(result).toBe("Even number");
    });
});