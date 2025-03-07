import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByRole('button', { name: 'Remove all Espresso', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Remove all Espresso', exact: true }).click();
  await expect(page.getByText('Espresso Macchiato$12.00 x 1')).toBeVisible();
});