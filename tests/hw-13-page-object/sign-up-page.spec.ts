import { test, Locator, Page } from "@playwright/test"; 
// Імпортуємо необхідні типи з Playwright:
// - test: для створення тестів
// - Locator: тип, який представляє елемент на сторінці
// - Page: тип, що представляє вебсторінку (вкладку браузера)

/*
1. Дописати Page Object Model, додати необхідні методи для взаємодії зі сторінкою 
2. Написати тест для реєстрації використовуючі створений SignInPage (не обовʼязкаово додавати перевірки)
3. Створити класс SignInPage (за прикладом класу SingUpPage)

класс повинен мати всі необхідні властивості і для знаходження елементів на сторінці
класс повинен мати можливість взаємодіяти зі сторінкою через методи
*/

class SignUpPage {
  page: Page; // Зберігає посилання на сторінку
  usernameLocator: Locator; // Локатор для поля "Username"
  passwordLocator: Locator; // Локатор для поля "Password"
  emailLocator: Locator; // Локатор для поля "Email"
  signUpButtonLocator: Locator; // Локатор для кнопки реєстрації

  // Конструктор викликається при створенні об’єкта класу
  constructor(page: Page) {
    this.page = page; // Ініціалізуємо сторінку
    this.usernameLocator = this.page.locator('[placeholder="Username"]'); // Знаходимо поле введення username
    this.passwordLocator = this.page.locator('[placeholder="Password"]'); // Знаходимо поле введення password
    this.emailLocator = this.page.locator('[placeholder="Email"]'); // Знаходимо поле введення email
    this.signUpButtonLocator = this.page.locator(".btn"); // Знаходимо кнопку реєстрації за класом
  }

  async setUsername(username: string) {
    // Метод для заповнення поля "Username"
    await this.usernameLocator.fill(username); // Вводимо значення у відповідне поле
  };

  async setPassword(password: string) {
    await this.passwordLocator.fill(password);
  };

  async setEmail(email: string) {
    await this.emailLocator.fill(email);
  };
}

test("page object example", async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  await page.goto("https://demo.learnwebdriverio.com/register");

  await signUpPage.usernameLocator.fill("userF");
  await signUpPage.passwordLocator.fill("userL");
  await signUpPage.emailLocator.fill("userFL@gm.com");
  await signUpPage.signUpButtonLocator.click();
});