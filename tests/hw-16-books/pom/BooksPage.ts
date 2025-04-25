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
    private search: Locator;
    private rows: Locator;

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
        const row = this.rows.first();
        const isbn = await row.locator('div').nth(4).innerText();
        await row.locator('a').click();
        return isbn;
    }
}