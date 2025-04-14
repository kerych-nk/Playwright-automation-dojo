/*
Напишіть тест де ви б переходили на сторінку https://demoqa.com/automation-practice-form

Вводили обовʼязкові поля і 
ЗАВАНТАЖУВАЛИ ФАЙЛ 

Перевіряєте що назва файлу зʼявилась поряд з кнопкою 

і самбітите форму. 
перевіряєте чи всі данні введені коректно. 


Як це робити? 
https://playwright.dev/docs/input#upload-files


⭐️ винесіть завантаження файла і введення полів в окрему функцію яка буде приймати оʼєкт Page і повернтати вам обʼєкт з методами для взаємодії зі сторінкою
*/

import { faker } from "@faker-js/faker";
import test, { expect, Page } from "@playwright/test";
import path from "path";


const URL1 = 'https://demoqa.com/automation-practice-form';
const filePath = path.join(__dirname, 'pic.png');

const formData = [
    {
        id: 'PF1',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: "Male",
        mobileNumber: faker.number.int({ min: 1000000000, max: 9999999999 }),
        dateOfBirth: faker.date.birthdate().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        file: "pic.png",
    },
    {
        id: 'PF2',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: "Male",
        mobileNumber: faker.number.int({ min: 1000000000, max: 9999999999 }),
        dateOfBirth: faker.date.birthdate().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        file: "pic.png",
    },
];

function RegistrationForm(page: Page) {
    this.page = page;

    this.uploadFile = async (file: string) => {
        await this.page.locator('#uploadPicture').setInputFiles(file);
        await expect(this.page.locator('#uploadPicture')).toHaveValue(/pic\.png$/);
    };

    this.setName = async (first: string, last: string) => {
        await this.page.locator('#firstName').fill(first);
        await this.page.locator('#lastName').fill(last);
    };

    this.setEmail = async (email: string) => {
        await this.page.locator('#userEmail').fill(email);
    };

    this.setGender = async (gender: 'Male' | 'Female' | 'Other') => {
        await this.page.locator(`//label[text()='${gender}']`).check();
    };

    this.setMobile = async (mobileNumber: string) => {
        await this.page.locator('#userNumber').fill(String(mobileNumber));
    };

    this.setDateOfBirth = async (dateOfBirth: string) => {
        const input = this.page.locator('#dateOfBirthInput');
        await input.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.type(dateOfBirth);
        await this.page.keyboard.press('Enter');
    };

    this.submit = async () => {
        await this.page.locator('#submit').click();
    };

    this.verify = async (d: typeof formData[number]) => {
        const modal = this.page.locator('.modal-content');
        await expect(modal).toBeVisible();

        const row = (label: string) =>
            modal
        .getByRole('row', {name: new RegExp(`^${label}`, 'i')})
        .locator('td')
        .nth(1);

        await expect(row('Student Name')).toHaveText(`${d.firstName} ${d.lastName}`);
        await expect(row('Student Email')).toHaveText(d.email);
        await expect(row('Gender')).toHaveText(d.gender);
        await expect(row('Mobile')).toHaveText(String(d.mobileNumber));
        await expect(row('Date of Birth')).toHaveText(d.dateOfBirth);
        await expect(row('Picture')).toHaveText('pic.png');

        await this.page.click('#closeLargeModal');
    };
}
  
test.beforeEach(async ({ page }) => {
    await page.route(new RegExp("ad"), (route) => {
      route.abort(); // Block the request
    });
  });
  
for (const data of formData) {
    test(`Submit the student form - ${data.id}`, async ({ page }) => {
        await page.goto(URL1);

        const registrationForm = new (RegistrationForm as any)(page);
        
        await registrationForm.uploadFile(filePath);
        await registrationForm.setName(data.firstName, data.lastName);
        await registrationForm.setEmail(data.email);
        await registrationForm.setGender(data.gender);
        await registrationForm.setMobile(data.mobileNumber);
        await registrationForm.setDateOfBirth(data.dateOfBirth);

        await registrationForm.submit();
        await registrationForm.verify(data);
    });
}