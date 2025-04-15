import test, { Locator, Page } from "@playwright/test";


class SignInPage {
    page: Page;
    emailLocator: Locator;
    passwordLocator: Locator;
    signInButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailLocator = this.page.locator('[placeholder="Email"]');
        this.passwordLocator = this.page.locator('[placeholder="Password"]');
        this.signInButtonLocator = this.page.locator('.btn');
    };

    async setEmail(userEmail: string) {
        await this.emailLocator.fill(userEmail);
    };

    async setPassword(password: string) {
        await this.passwordLocator.fill(password);
    };
}

test("user Sign in", async ({ page }) => {
    const signInPage = new SignInPage(page);

    await page.goto("https://demo.learnwebdriverio.com/login");

    await signInPage.emailLocator.fill("userFL@gm.com");
    await signInPage.passwordLocator.fill("userL");
    await signInPage.signInButtonLocator.click();
});