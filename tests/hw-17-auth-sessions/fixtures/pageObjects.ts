import { test as base } from "./auth";
import { ArticlesPage } from "../../hw-14-oop/app/pages/ArticlesPage";
import { ArticleEditorPage } from "../../hw-14-oop/app/pages/ArticleEditorPage";
import { SignInPage } from "../../hw-14-oop/app/pages/SignInPage";

export const test = base.extend<{
    signInPage: SignInPage;
    articlesPage: ArticlesPage;
    articleEditor: ArticleEditorPage;
}>({
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
    articlesPage: async ({ page }, use) => {
        await use(new ArticlesPage(page));
    },
    articleEditor: async ({ page }, use) => {
        await use(new ArticleEditorPage(page));
    },
});

export { expect } from "./auth";