import {test, expect} from '@playwright/test';

test('add 1 more coffee by clicking "+" button', async ({ page }) => {

    await page.goto('https://coffee-cart.app/');

    await page.locator('//div[@data-cy="Espresso"]').click();

    await page.locator('//a[@aria-label="Cart page"]').click();

    await page.locator('(//button[@aria-label="Add one Espresso"])[2]').click();

    await expect (
        page.locator('//span[@class="unit-desc" and contains(text(), "$10.00 x 2")]')).toBeVisible();
});