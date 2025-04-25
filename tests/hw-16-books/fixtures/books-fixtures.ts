import base, { Page } from '@playwright/test';
import { promises as fs } from 'fs';
import path from 'path';
import { BooksPage } from '../pom/BooksPage';

export const test = base.extend<{
    books: BooksPage;
}>({
    page: async ({ page }, use) => {
        await page.route(/ad/i, r => r.abort());

        page.on('console', async m => {
            if (m.type() === 'error') {
                const line = `[${new Date().toISOString()}] ${m.text()}\n`;
                await fs.appendFile(
                    path.resolve(__dirname, '..', 'console-errors.txt'),
                    line,
                );
                console.log('[ERROR]', m.text());
            }
        });
        await use(page);
    },
    books: async ({ page }, use) => {
        const bp = new BooksPage(page);
        await bp.goto();
        await use(bp);
    },
});
export { expect } from '@playwright/test';