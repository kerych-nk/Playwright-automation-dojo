import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage {
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private gender = (g: 'Male' | 'Female' | 'Other') =>
        this.page.locator(`input[name="gender"][value="${g}"]`);
    private mobile: Locator;
    private dobInput: Locator;
    private picture: Locator;
    private submitBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = this.$('#firstName');
        this.lastName = this.$('#lastName');
        this.email = this.$('#userEmail');
        this.mobile = this.$('#userNumber');
        this.dobInput = this.$('#dateOfBirthInput');
        this.picture = this.$('#uploadPicture');
        this.submitBtn = this.$('#submit');
    }

    async goto() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async uploadPicture(path: string) {
        await this.picture.setInputFiles(path);
        await expect(this.picture).toHaveValue(/pic\.png$/);
    }

    async fillRequired(data: {
        first: string;
        last: string;
        email: string;
        gender: 'Male' | 'Female' | 'Other';
        mobile: string;
        dob: string;
    }) {
        await this.firstName.fill(data.first);
        await this.lastName.fill(data.last);
        await this.email.fill(data.email);
        await this.gender(data.gender).check({ force: true });
        await this.mobile.fill(data.mobile);
        
        await this.dobInput.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.type(data.dob);
        await this.page.keyboard.press('Enter');
    }
    async submit() {
        await this.submitBtn.click();
    }

    async expectResult(d: {
        name: string;
        email: string;
        gender: string;
        mobile: string;
        dobLong: string;
    }) {
        const cell  = (label: string) =>
            this.page
                .locator('.modal-content')
                .getByRole('row', { name: new RegExp(`^${label}`, 'i') })
                .locator('td')
                .nth(1);

        await expect(cell('Student Name')).toHaveText(d.name);
        await expect(cell('Student Email')).toHaveText(d.email);
        await expect(cell('Gender')).toHaveText(d.gender);
        await expect(cell('Mobile')).toHaveText(d.mobile);
        await expect(cell('Date of Birth')).toHaveText(d.dobLong);
        await expect(cell('Picture')).toHaveText('pic.png');
    }
}