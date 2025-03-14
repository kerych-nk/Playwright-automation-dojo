import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

test('should remove coffee from cart - variables', async ({ page }) => {
    const selectEspressoLocator = page.locator('[data-test="Espresso"]');
    const selectMachiatoLocator = page.locator('[data-test="Espresso_Macchiato"]');
    const cartButtonLocator = page.locator('a[aria-label="Cart page"]');
    const removeCoffeeVisibleLocator = page.getByRole('button', { name: 'Remove all Espresso', exact: true });
    const removeCoffeeLocator = page.getByRole('button', { name: 'Remove all Espresso', exact: true });
    const coffeeAvailableLocator = page.getByText('Espresso Macchiato$12.00 x 1');


    await selectEspressoLocator.click();
    await selectMachiatoLocator.click();
    await cartButtonLocator.click();
    await expect(removeCoffeeVisibleLocator).toBeVisible();
    await removeCoffeeLocator.click();
    await expect(coffeeAvailableLocator).toBeVisible();
});