import { test, expect } from '@playwright/test';

test('appear successful message after completing purchase', async ({ page }) => {
  
    await page.goto('https://coffee-cart.app/');
  
    await page.locator('[data-test="Espresso"]').click();
  
    await page.locator('[data-test="checkout"]').click();
  
    await expect(page.getByText('Payment details×We will send')).toBeVisible();
  
    await page.getByRole('textbox', { name: 'Name' }).click();
  
    await page.getByRole('textbox', { name: 'Name' }).fill('Nazar');
  
    await page.getByRole('textbox', { name: 'Email' }).click();
  
    await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  
    await page.getByRole('button', { name: 'Submit' }).click();
  
    await expect(page.locator('#app')).toContainText('Thanks for your purchase. Please check your email for payment.');
});