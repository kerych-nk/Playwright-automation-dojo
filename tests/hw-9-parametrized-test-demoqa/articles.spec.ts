import { faker } from "@faker-js/faker";
import test, { Page } from "@playwright/test";


const URL1 = "https://demo.learnwebdriverio.com/login";

const testData = [
    {
        userData: {
            email: "test123@gmail.com",
            password: "Qwerty",
        },
        articleData: {
            title: faker.internet.domainWord(),
        },
    },
];

const allLocators = {
    signInLocators: {
        email: (page: Page) => page.locator('input[placeholder="Email"]'),
        password: (page: Page) => page.locator('input[placeholder="Password"]'),
        signInButton: (page: Page) => page.locator('//button[contains(., "Sign in")]'),
    },
    articleLocators: {
        newArticleButton: (page: Page) => page.locator('//a[@href="/editor"]'),
        articleTitle: (page: Page) => page.locator('input[placeholder="Article Title"]'),
        publishArticleButton: (page: Page) => page.locator('button[type="submit"]'),
    },
};

async function signInFields(
    page: Page,
    signInData: {
        email: string;
        password: string;
    }
) {
     await allLocators.signInLocators.email(page).fill(signInData.email);
     await allLocators.signInLocators.password(page).fill(signInData.password);
     await allLocators.signInLocators.signInButton(page).click();
}

async function articlesFields(
    page: Page,
    articleData: {
        articleTitle: string;
    }
) {
   await allLocators.articleLocators.newArticleButton(page).click();
   await allLocators.articleLocators.articleTitle(page).fill(articleData.articleTitle);
   await allLocators.articleLocators.publishArticleButton(page).click();
}

for (const data of testData) {
    test('New Article', async ({ page }) => {
        await page.goto(URL1);
        await signInFields(page, data.userData);

    const articleCount = 3;
    for (let i = 0; i < articleCount; i++){
        await articlesFields(page, {
            articleTitle: data.articleData.title,
        });
        await page.waitForURL('**/articles/*', { timeout: 5000 });
    }
    });
}