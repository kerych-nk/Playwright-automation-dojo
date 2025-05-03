import { Locator, Page } from "@playwright/test";

export class SignInPage {
    private userEmailLocator: Locator;
    private userPasswordLocator: Locator;
    private signInButtonLocator: Locator;

    constructor(private readonly page: Page) {

        this.userEmailLocator = this.page.locator('[placeholder="Email"]');

        this.userPasswordLocator = this.page.locator('[placeholder="Password"]');

        this.signInButtonLocator = this.page.locator(`//button[normalize-space(.)='Sign in']`);
    }

    async goto() {
        await this.page.goto("https://demo.learnwebdriverio.com/login", {
            waitUntil: 'domcontentloaded',
        });
    }

    async enterUserEmail(email: string) {
        await this.userEmailLocator.fill(email);
    }

    async enterUserPassword(password: string) {
        await this.userPasswordLocator.fill(password);
    }

    async clickSignIn() {
        await this.signInButtonLocator.click();
    }
}