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
import { SignInPage } from "./app/pages/SignInPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

test("Create new article - NA03", async ({ page }) => {
  const signInPage = new SignInPage(page);
  const articleEditorPage = new ArticleEditorPage(page);
  const articlesPage = new ArticlesPage(page);
  const basePage = new BasePage(page);

  await signInPage.goto();
  await signInPage.enterUserEmail();
  await signInPage.enterUserPassword();
  await signInPage.clickSignIn();

  await basePage.goToNewArticle();

  await articleEditorPage.editArticle({
    title: "random title",
    description: "random desc",
    body: "random body",
  });

  await articleEditorPage.publishArticle();

  const articleHeader = articlesPage.getArticleLocatorByTitle("random title");

  await expect(articleHeader).toBeVisible();
});
