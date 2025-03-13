import {test, expect} from '@playwright/test';

test('required fields cannot be left blank during Sign Up', async ({ page }) => {

    await page.goto('https://demo.learnwebdriverio.com/');

    await page.locator('//a[@href="/register"]').click();

    await page.locator('//button[contains(., "Sign up")]').click();

    await expect(page.locator(`//li[normalize-space(text())="username can't be blank"]`)).toBeVisible();

    await expect(page.locator(`//li[normalize-space(text())="email can't be blank"]`)).toBeVisible();

});