import { test, expect } from "@playwright/test";
import { UserController } from "../controllers/Users/UserController";

test("APIQA-161 login user - it should logged", async ({ request }) => {
    const userController = new UserController(request);
    const requestBody = {
        email: process.env.EMAIL!,
        password: process.env.PASSWORD!,
    };

    // Act
    const response = await userController.loginUser(requestBody);

    // Assert
    const responseJson = await response.json();

    expect(response.status()).toBe(200);
    expect(responseJson.user.token).toBeTruthy();
});

test.skip("APIQA-162 register user - it should registered", async ({ request }) => {
    // Arrange
    const userController = new UserController(request);
    const requestBody = {
        email: "psp@gm.com",
        password: "1234",
        username: "admin",
    };
    // Act
    const response = await userController.registerUser(requestBody);

    // Assert
    const responseJson = await response.json();

    expect(response.status()).toBe(200);
    expect(responseJson.user.token).toBeTruthy();
});