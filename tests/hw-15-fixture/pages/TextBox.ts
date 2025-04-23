import { BasePage } from "./BasePage";

export class TextBox extends BasePage {
    private name = this.$('#userName');
    private email = this.$('#userEmail');
    private currAddress = this.$('#currentAddress');
    private permAddress = this.$('#permanentAddress');
    private submit = this.$('#submit');

    async goto() {
        await this.page.goto('https://demoqa.com/text-box');
    }

    async fill(n: string, e: string, c: string, p: string) {
        await this.name.fill(n);
        await this.email.fill(e);
        await this.currAddress.fill(c);
        await this.permAddress.fill(p);
    }
    async send() { 
        await this.submit.click();
    }
}