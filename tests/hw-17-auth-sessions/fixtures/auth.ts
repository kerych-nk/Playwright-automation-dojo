import { test as base, Page, BrowserContext, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { loginAs } from '../utils/login';

export type Roles = | 'Administrator' | 'ContentAdmin' | 'ContentReader' | 'ArticleEditor';

export const test = base.extend<{
    role: Roles;
    storageState: string;
    context: BrowserContext;
    page: Page;
}>({
    role: ['ContentReader', { option: true }],

    storageState: async ({ playwright, role }, use) => {
        const dir = path.resolve(__dirname, '.auth');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);

        const file = path.join(dir, `${role}.json`);

        if (!fs.existsSync(file)) {
            const tempBrowser = await playwright.chromium.launch({ headless: true });
            const context = await tempBrowser.newContext();
            const page = await context.newPage();

            await loginAs(page, role);
            await context.storageState({ path: file });
            await tempBrowser.close();
            
        }
        await use(file);
    },
    context: async ({ browser, storageState }, use) => {
        const context = await browser.newContext({ storageState });
        await use(context);
        await context.close();
    },
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
    },
});
export { expect };