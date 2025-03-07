import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await expect(page.locator('#app')).toContainText('Espresso x 1');
  await expect(page.locator('#app')).toContainText('Espresso Macchiato x');
  await expect(page.getByRole('link', { name: 'Cart page' })).toBeVisible();
});