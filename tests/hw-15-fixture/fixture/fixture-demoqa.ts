/*
По мотивам ДЗ з https://demoqa.com/automation-practice-form у вас вже повинен бути page object model для цієї форми і для https://demoqa.com/text-box

1. Зробити дві фікстури які б вам повертали Page Object Model для цих сторінок
2. Додати у фікстуру page механізм аборту реквестів page.route()
3. Додати фікстуру page механізм треканя console, якщо ви отримуєте console з типом error виводите її в console.log 

⭐️ записуйте всі отриманні консольні помилки в txt файл (використовуйте вбудований модуль promise https://nodejs.org/dist/latest-v10.x/docs/api/fs.html)
*/

import base from '@playwright/test';
import { promises as fs } from 'fs';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { TextBox } from '../pages/TextBox';
import path from 'path';

export const test = base.extend<{
    practiceForm: PracticeFormPage;
    textBox: TextBox;
}>({
    page: async ({ page }, use) => {
        await page.route(/ad/i, r => r.abort());

        page.on('console', async m => {
            if (m.type() === 'error') {
                const row = `[${new Date().toISOString()}] ${m.text()}\n`;
                console.log('[ERROR]', m.text());
                await fs.appendFile(path.resolve(__dirname, '..', 'console-error.txt'), row);
            }
        });
        await use(page);
    },

    practiceForm: async ({ page }, use) => {
        const form = new PracticeFormPage(page);
        await form.goto();
        await use(form);
    },

    textBox: async ({ page }, use) => {
        const tb = new TextBox(page);
        await tb.goto();
        await use(tb);
    },
});
export { expect } from '@playwright/test';