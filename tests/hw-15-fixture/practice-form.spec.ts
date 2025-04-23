import { test } from "./fixture/fixture-demoqa";
import { faker } from "@faker-js/faker";
import path from "path";

test.beforeEach(async ({ page }) => {
    await page.route(new RegExp("ad"), (route) => {
      route.abort(); // Block the request
    });
  });
  
test('Practice Form with fixture', async ({ practiceForm }) => {
    const file = path.join(__dirname, 'pic.png');

    const dob = faker.date.birthdate({ min: 18, max: 55, mode: 'age' });
    const dobShort = dob.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
    const dobLong = dob.toLocaleDateString('en-GB', { day:'2-digit', month:'long',  year:'numeric' }).replace(' ', ',');

    await practiceForm.uploadPicture?.(file);
    await practiceForm.fillRequired({
        first: faker.person.firstName(),
        last: faker.person.lastName(),
        email: faker.internet.email(),
        gender: 'Male',
        mobile: faker.number.int({ min: 1_000_000_000, max: 9_999_999_999 }).toString(),
        dob: dobShort,
    });
    practiceForm.submit;
});