/*
1. Дописати методи  і властивості для взаємодії зі сторінкою Articles 

editArticle()
removeArticle()

2. Дописати тести з використанням цих методів

3. Зробити наслідування від BasePage 

4. Дадати до BasePage методи і властивості необхідні для взаємодії з хедером сторінки
*/

import { Locator, Page } from "@playwright/test";

export class SignUpPage {
  private page: Page;
  private usernameLocator: Locator;
  private passwordLocator: Locator;
  private emailLocator: Locator;
  private signUpButtonLocator: Locator;

  // виконується перший
  constructor(page: Page) {
    this.page = page;

    this.usernameLocator = this.page.locator('[placeholder="Username"]');
    this.passwordLocator = this.page.locator('[placeholder="Password"]');
    this.emailLocator = this.page.locator('[placeholder="Email"]');
    this.signUpButtonLocator = this.page.locator(".btn");
  }

  async goto() {
    await this.page.goto("/register");
  }

  private async setUsername(username: string = "") {
    await this.usernameLocator.fill(username);
  }

  private async setPassword(password: string = "") {
    await this.passwordLocator.fill(password);
  }

  private async setEmail(email: string = "") {
    await this.emailLocator.fill(email);
  }

  async clickSignUp() {
    await this.signUpButtonLocator.click();
  }

  async registerUser(registrationData: {
    pass?: string;
    email?: string;
    username?: string;
  }) {
    await this.setUsername(registrationData.username);
    await this.setEmail(registrationData.email);
    await this.setPassword(registrationData.pass);
    await this.clickSignUp();
  }
}
