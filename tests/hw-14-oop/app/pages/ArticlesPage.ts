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

  getEditButtonByTitle() {
    return this.page.getByRole('link', { 
      name: '  Edit Article' 
    });
  }

  getDeleteButton() {
    
  }
}
