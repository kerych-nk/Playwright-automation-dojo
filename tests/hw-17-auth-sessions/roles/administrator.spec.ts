import { test, expect } from "../fixtures/pageObjects";
import { faker } from "@faker-js/faker";

test.use({ 
    role: 'ArticleEditor'
});

test('NK05 - ArticleEditor can create a new article', async ({  
    articleEditor,
    articlesPage,
}) => {
    const title = faker.lorem.words(3);
    const description = faker.lorem.sentence();
    const body = faker.lorem.paragraphs(2);

    await articleEditor.goToNewArticle();
    await articleEditor.editArticle({ title, description, body });
    await articleEditor.publishArticle();

    await articlesPage.goHome();
    const row = articlesPage.getArticleLocatorByTitle(title);
    await expect(row).toBeVisible();
});