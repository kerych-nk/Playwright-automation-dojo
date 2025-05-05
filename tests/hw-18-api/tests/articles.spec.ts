import { test, expect } from "./request.fixture";
import { Article } from "../controllers/Articles/ArticleType";
import { ArticlesController } from "../controllers/Articles/ArticlesController";

test.use({ authData: { email: process.env.EMAIL } });

test("test static method", async ({}) => {
    ArticlesController.printBaseUrl();
    console.log(ArticlesController.baseUrl);
});

test("MQA-125151 create article - it should created", async ({ request }) => {
    const articlesController = new ArticlesController(request);
    const requestBody: Article = {
        title: "some title",
        body: "some body",
        tagList: ["qa", "dojo", "test"],
    };
    const response = await articlesController.createArticle(requestBody);
    expect(response.status()).toBe(200);
});

test("MQA-125152 get article - it should exist", async ({ request }) => {
    const articlesController = new ArticlesController(request);
    const response = await articlesController.getArticle("");

    expect(response.status()).toBe(200);
});

test("MQA-125153 get article - it should return 10 article", async ({ request }) => {
    const articlesController = new ArticlesController(request);
    const response = await articlesController.getArticles(0, 10);

    expect(response.status()).toBe(200);
});