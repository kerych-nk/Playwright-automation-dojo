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
  await page.locator('#name').click();

    // Check that "Name" field empty by default
  await expect(page.locator('#name')).toBeEmpty();

    // Fill in required fields
  await page.locator('#name').fill('Nazar');
  await page.locator('#email').click();
  await page.locator('#email').fill('test@gmail.com');

    // Input field have value
  await expect(page.locator('#email')).toHaveValue('test@gmail.com');

    // Submitting the form
  await page.locator('#promotion').check();
  await page.locator('#submit-payment').click();
});