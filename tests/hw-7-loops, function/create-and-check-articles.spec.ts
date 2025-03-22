import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/');
    
    await page.locator('//a[@href="/login"]').click();
    
    await page.locator('//input[@placeholder="Email"]').fill('test4@gmail.com');
    
    await page.locator('//input[@placeholder="Password"]').fill('Qwerty');
    
    await page.locator('//button[contains(., "Sign in")]').click();
});

test.describe("articles should be created and visible", () => {
    test("hw7-2 create new articles", async ({ page }) => {
        const articlesCount = 3;
        for (let i = 0; i < articlesCount; i++){
            await page.locator('//a[@href="/editor"]').click();

            const titleInput = page.getByRole('textbox', { name: 'Article Title' });
            await titleInput.fill(`ArticleNk ${i}`);

            const publishButton = page.getByRole('button', { name: 'Publish Article' });
            await publishButton.click();
            await page.waitForURL('**/articles/articlenk*', { timeout: 5000 });
        }
        await page.getByRole('link', { name: 'Home' }).click();;

        for (let i = 0; i < articlesCount; i++) {
            await expect(page.locator(`text=ArticleNk ${i}`)).toBeVisible();
        }
    });
});