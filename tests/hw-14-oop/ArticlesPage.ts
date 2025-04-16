import { Locator, Page } from "@playwright/test";

export class ArticlesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getArticleLocatorByTitle(title: string) {
    return this.page.getByRole("heading", {
      name: title,
    });
  }
}
