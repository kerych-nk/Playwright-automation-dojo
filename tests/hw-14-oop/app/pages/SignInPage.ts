import { Locator, Page } from "@playwright/test";

export class SignInPage {
    private page: Page;
    private userEmailLocator: Locator;
    private userPasswordLocator: Locator;
    private signInButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.userEmailLocator = this.page.locator('[placeholder="Email"]');

        this.userPasswordLocator = this.page.locator('[placeholder="Password"]');

        this.signInButtonLocator = this.page.locator(`//button[normalize-space(.)='Sign in']`);
    }

    async goto() {
        await this.page.goto("https://demo.learnwebdriverio.com/login");
    }

    async enterUserEmail(email: string = "test1234@gmail.com") {
        await this.userEmailLocator.fill(email);
    }

    async enterUserPassword(password: string = "test123") {
        await this.userPasswordLocator.fill(password);
    }

    async clickSignIn() {
        await this.signInButtonLocator.click();
    }
}