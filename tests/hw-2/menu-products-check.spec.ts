import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByText('Espresso $10.00espressoEspresso Macchiato $12.00espressomilk foamCappuccino $19').click();
  await expect(page.getByText('Espresso $10.00espresso')).toBeVisible();
  await expect(page.getByLabel('Menu page')).toContainText('menu');
});