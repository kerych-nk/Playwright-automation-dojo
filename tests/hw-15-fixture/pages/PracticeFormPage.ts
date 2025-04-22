import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage {
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private gender = (g: string) => this.page.getByLabel(g);
}