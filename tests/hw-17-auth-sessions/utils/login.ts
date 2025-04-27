import { Page, expect } from "@playwright/test";

export async function loginAs(page: Page, role: string) {
    const baseURL = 'https://demo.learnwebdriverio.com/login';

    await page.goto(`${baseURL}login`);

    await page.fill('[placeholder="Email"]', role);
    await page.fill('[placeholder="Password"]', 'nktest123');
    await page.click(`//button[normalize-space(.)='Sign in']`);

    await expect(page).toHaveURL(/demo/);
}