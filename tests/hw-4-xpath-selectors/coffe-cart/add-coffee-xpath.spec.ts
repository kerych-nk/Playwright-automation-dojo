import { test, expect } from '@playwright/test';

test('add coffee to cart using xpath selectors', async ({ page }) => {

    await page.goto('https://coffee-cart.app/');

    await page.locator('//div[@data-cy="Espresso"]').click();

    await page.locator('//button[@data-test="checkout"]').click();

    await page.locator('//input[@id="name"]').fill('Nazar');

    await page.locator('//input[@id="email"]').fill('test@gmail.com');

    await page.locator('//input[@id="promotion"]').check();

    await page.locator('//button[@id="submit-payment"]').click();

    await expect(page.locator('//div[@class="snackbar success"]')).toContainText('Thanks for your purchase. Please check your email for payment.');
});