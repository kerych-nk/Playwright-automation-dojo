import { Page } from "@playwright/test";
import { credentials } from "../fixtures/credentials";
import type { Roles } from "../fixtures/auth";
import { SignInPage } from "../../hw-14-oop/app/pages/SignInPage";


export async function loginAs(page: Page, role: Roles) {
    const { username, password } = credentials[role];
    const signIn = new SignInPage(page);

    await signIn.goto();
    await signIn.enterUserEmail(username);
    await signIn.enterUserPassword(password);
    
    await Promise.all([
        page.waitForURL('https://demo.learnwebdriverio.com/', { timeout: 10_000 }),
        signIn.clickSignIn(),
    ]);

    await page.waitForLoadState('networkidle');
}