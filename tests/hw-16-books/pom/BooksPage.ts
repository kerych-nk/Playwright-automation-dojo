/*
написати тест який би шукав книжку і клікав на знайдену книжку 
створити page object model
перевіряти що url на який перенесло юзера відповідає патерну /books?book=

⭐️ ❗️складний рівень для тих хто себе хоче почеленджити 
перевіряв що url на який редиректить користувача відповідає книзі 
підказка: треба юзати network requests
*/

import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../../hw-15-fixture/pages/BasePage";

export class BooksPage extends BasePage {
    public readonly rows: Locator;
    private readonly search: Locator;

    constructor(page: Page) {
        super(page);
        this.search = this.$('#searchBox');
        this.rows = this.$('.rt-tbody .rt-tr-group');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/books');
    }

    async searchBox(query: string) {
        await this.search.fill(query);
        await expect(this.rows).not.toHaveCount(0);
    }

    async clickFirstBook() {
        const firstLink = this.rows.first().locator('a');
        
        await Promise.all([
            this.page.waitForURL(/\/books\?book=.*/),
            firstLink.click(),
        ]);
    }
}