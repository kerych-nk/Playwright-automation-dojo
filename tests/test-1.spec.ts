import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recordin
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: ' Sign up' }).click();
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('username can\'t be blank')).toBeVisible();
  await expect(page.getByText('email can\'t be blank')).toBeVisible();
  await expect(page.getByText('email can\'t be blank')).toBeVisible();
});