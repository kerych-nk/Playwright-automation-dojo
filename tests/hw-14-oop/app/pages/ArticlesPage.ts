import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ArticlesPage extends BasePage {
  constructor(page: Page) { 
    super(page);

  }

  getArticleLocatorByTitle(title: string) {
    return this.page.getByRole("heading", {
      name: title,
    });
  }

  async editArticleOnDetailsPage() {
    await this.page.getByRole("link", { name: "Edit Article" })
    .first()
    .click();
  }

  async deleteArticleOnDetailsPage() {
    await this.page.getByRole("button", { name: "Delete Article" }).click();
  }

  async expectArticleNotPresent(title: string) {
    await this.getArticleLocatorByTitle(title).waitFor({ state: "detached" });
  }
}
