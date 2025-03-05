import { test, expect } from '@playwright/test';

test('check playwright logo and search functionality', async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
await expect(page.getByRole('banner')).toContainText('Get started');
await page.getByRole('link', { name: 'Docs' }).click();
await page.getByRole('button', { name: 'Search (Command+K)' }).click();
await page.getByRole('searchbox', { name: 'Search' }).fill('test generator');
await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue('test generator');
await page.getByRole('option', { name: 'Test generator', exact: true }).getByRole('link').click();
});
