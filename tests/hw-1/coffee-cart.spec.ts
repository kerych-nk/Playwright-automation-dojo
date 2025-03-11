import { test, expect } from '@playwright/test';

test('add coffee to cart and purchase it', async ({ page }) => {
    
  await page.goto('https://coffee-cart.app/');

  await page.locator('[data-test="Flat_White"]').click();
    
  await expect(page.locator('#app')).toContainText('Flat White');

  await expect(page.locator('[data-test="checkout"]')).toBeVisible();

  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).click();

  await expect(page.getByRole('textbox', { name: 'Name' })).toBeEmpty();

  await page.getByRole('textbox', { name: 'Name' }).fill('Nazar');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');

  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('test@gmail.com');

  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});