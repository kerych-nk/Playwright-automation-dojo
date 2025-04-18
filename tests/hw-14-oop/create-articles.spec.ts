/*
1. Дописати методи  і властивості для взаємодії зі сторінкою Articles 

editArticle()
removeArticle()

2. Дописати тести з використанням цих методів

3. Зробити наслідування від BasePage 

4. Дадати до BasePage методи і властивості необхідні для взаємодії з хедером сторінки
*/

// page object model  (обєкт моделі сторінки)
import { test, Locator, Page, expect } from "@playwright/test";
import { SignUpPage } from "./app/pages/SignUpPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

test("create article", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlesPage = new ArticlesPage(page);

  await signUpPage.goto();
  await signUpPage.registerUser({
    username: "test1234",
    email: "test1234@gmail.com",
    pass: "test123",
  });

  await page.locator(`//a[@href="/editor"]`).click();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});
