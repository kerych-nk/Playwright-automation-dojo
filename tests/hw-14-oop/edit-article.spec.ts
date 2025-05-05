import test, { expect } from "@playwright/test";
import { SignInPage } from "./app/pages/SignInPage";
import { ArticleEditorPage } from "./app/pages/ArticleEditorPage";
import { ArticlesPage } from "./app/pages/ArticlesPage";
import { BasePage } from "./app/pages/BasePage";

test("Edit article - EA01", async ({ page }) => {
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

    //Edit article
    await articlesPage.editArticleOnDetailsPage();
    const newTitle = `${originalTitle}-updated`;
    await editArticlePage.editArticle({
        title: newTitle,
        description: "test desc2",
        body: "test body2",
    });
    await editArticlePage.publishArticle();

    //Check edited article
    await expect(articlesPage.getArticleLocatorByTitle(newTitle)).toBeVisible();
});