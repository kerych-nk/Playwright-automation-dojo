import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByRole('button', { name: 'Add one Espresso' })).toBeVisible();
  await page.getByRole('button', { name: 'Add one Espresso' }).click();
  await expect(page.locator('#app')).toContainText('$10.00 x 2');
});