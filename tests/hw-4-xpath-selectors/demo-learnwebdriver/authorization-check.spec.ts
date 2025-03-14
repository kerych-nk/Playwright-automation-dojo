import { test, expect } from '@playwright/test';

test('valid user registration', async ({ page }) => {

    await page.goto('https://demo.learnwebdriverio.com/');

    await page.locator('//a[@href="/register"]').click();

    await page.locator('//input[@placeholder="Username"]').fill('NazarK3');

    await page.locator('//input[@placeholder="Email"]').fill('test3@gmail.com');

    await page.locator('//input[@placeholder="Password"]').fill('Qwerty');

    await page.locator('//button[contains(., "Sign up")]').click();

    await expect(page.locator('//a[@href="/settings"]')).toBeVisible();
});