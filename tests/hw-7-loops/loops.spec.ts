import { test } from "@playwright/test";

test("order all existing coffees", async ({ page }) => {
    await page.goto(`https://coffee-cart.app/`);

    for (let i = 0; i < 9; i++) {
        await page.locator("")
    }
}
)