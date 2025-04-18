import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected homeLinkLocator: Locator;
  protected newArticleLinkLocator: Locator;
  protected settingsLinkLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLinkLocator = page.locator("//a[normalize-space(.)='Home']");
    this.newArticleLinkLocator = page.locator("a[href='/editor']");
    this.settingsLinkLocator = page.locator("a[href='/settings']");
  }

  async goHome() {
    await this.homeLinkLocator.click();
  }
  async goToNewArticle() {
    await this.newArticleLinkLocator.click();
  }
  async goToSettings() {
    await this.settingsLinkLocator.click();
  }
}
