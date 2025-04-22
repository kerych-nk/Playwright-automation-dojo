import { Locator, Page } from "@playwright/test";

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    protected $(selector: string): Locator {
        return this.page.locator(selector);
    }
}