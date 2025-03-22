import { expect, test } from "@playwright/test";

test("hw7-1 order all existing coffees", async ({ page }) => {
    await page.goto(`https://coffee-cart.app/`);
    const cups = page.locator(".cup-body");
    const count = await cups.count();

    for (let i = 0; i < count; i++) {
        await cups.nth(i).click();

        const promo = page.locator(".promo");
        if (await promo.isVisible()) {
            await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
        }
    }

    await page.getByRole('link', { name: 'Cart page' }).click();
    expect(count).toEqual(9);
});