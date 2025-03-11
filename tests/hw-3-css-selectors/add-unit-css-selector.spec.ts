import { test, expect } from '@playwright/test';

test('add coffee by clicking "+" button', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  await page.locator('[data-test="Espresso"]').click();

  await page.locator('a[aria-label="Cart page"]').click();

  await page.getByRole('button', { name: 'Add one Espresso' }).click();
  
  await expect(page.locator('#app')).toContainText('$10.00 x 2');
});