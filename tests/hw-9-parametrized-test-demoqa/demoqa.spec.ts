import { test, expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

const Url = 'https://demoqa.com/text-box/';

const formData = [
  {
    id: 'DQA1',
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    currentAddress: faker.location.city(),
    permanentAddress: faker.location.secondaryAddress(),
  },
  {
    id: 'DQA2',
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    currentAddress: faker.location.city(),
    permanentAddress: faker.location.secondaryAddress(),
  },
  {
    id: 'DQA3',
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    currentAddress: faker.location.city(),
    permanentAddress: faker.location.secondaryAddress(),
  },
  {
    id: 'DQA4',
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    currentAddress: faker.location.city(),
    permanentAddress: faker.location.secondaryAddress(),
  },
  {
    id: 'DQA5',
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    currentAddress: faker.location.city(),
    permanentAddress: faker.location.secondaryAddress(),
  },
];

const formLocators = {
  inputLocators: {
    fullName: (page: Page) => page.locator('#userName'),
    email: (page: Page) => page.locator('#userEmail'),
    currentAddress: (page: Page) => page.locator('#currentAddress'),
    permanentAddress: (page: Page) => page.locator('#permanentAddress'),
    submitButton: (page: Page) => page.locator('#submit'),
  },
  outputLocators: {
    name: (page: Page) => page.locator('p#name'),
    email: (page: Page) => page.locator('p#email'),
    currentAddress: (page: Page) => page.locator('p#currentAddress'),
    permanentAddress: (page: Page) => page.locator('p#permanentAddress'),
  },
}

async function fillFormFields(
  page: Page,
  formData: {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
  }
) {
  await formLocators.inputLocators.fullName(page).fill(formData.fullName);
  await formLocators.inputLocators.email(page).fill(formData.email);
  await formLocators.inputLocators.currentAddress(page).fill(formData.currentAddress);
  await formLocators.inputLocators.permanentAddress(page).fill(formData.permanentAddress);
  await formLocators.inputLocators.submitButton(page).click();
}

async function checkOutput(
  page: Page,
  formData: {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
  }
) {
  await expect(formLocators.outputLocators.name(page)).toContainText(formData.fullName);
  await expect(formLocators.outputLocators.email(page)).toContainText(formData.email);
  await expect(formLocators.outputLocators.currentAddress(page)).toContainText(formData.currentAddress);
  await expect(formLocators.outputLocators.permanentAddress(page)).toContainText(formData.permanentAddress);
}

for(const data of formData) {
  test(`${data.id} - should fill form with random data`, async ({ page }) => {
    await page.goto(Url);
    await fillFormFields(page, data);
    await checkOutput(page, data);
  });
}