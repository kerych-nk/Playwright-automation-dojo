import { test, expect } from '@playwright/test';

test('add coffee to cart and purchase it', async ({ page }) => {
    // Navigate to the Coffee cart page
  await page.goto('https://coffee-cart.app/');

    // Select coffee to buy
  await page.locator('[data-test="Flat_White"]').click();
    
    // Verify coffee name is correct
  await expect(page.locator('#app')).toContainText('Flat White');

    // Check that checkout is visible
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();

    // Navigate to the checkout
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).click();

    // Check that "Name" field empty by default
  await expect(page.getByRole('textbox', { name: 'Name' })).toBeEmpty();

    // Fill in required fields
  await page.getByRole('textbox', { name: 'Name' }).fill('Nazar');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');

    // Input field have value
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('test@gmail.com');

    // Submitting the form
  await page.getByRole('checkbox', { name: 'Promotion checkbox' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});