import test from "@playwright/test";
import { SignInPage } from "./app/pages/SignInPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";
import { title } from "process";

test("Delete article - DA02", async ({ page }) => {
    const signInPage = new SignInPage(page);
    const editArticlePage = new ArticleEditorPage(page);
    const articlesPage = new ArticlesPage(page);
    const basePage = new BasePage(page);
    const ts = Date.now();

     //Sign
     await signInPage.goto();
     await signInPage.enterUserEmail('article.editor@example.com');
     await signInPage.enterUserPassword('Article#2');
     await signInPage.clickSignIn();

     //Create new article
    await basePage.goToNewArticle();
    const originalTitle = `title-${ts}`;
    await editArticlePage.editArticle({
        title: originalTitle,
        description: "test random desc",
        body: "test random body",
    });
    await editArticlePage.publishArticle();

    //Delete article
    await articlesPage.deleteArticleOnDetailsPage();
    await page.waitForURL("**/");

    await articlesPage.expectArticleNotPresent(title);
});