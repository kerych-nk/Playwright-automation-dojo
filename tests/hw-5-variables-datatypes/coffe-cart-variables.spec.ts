import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

test('add coffee to the cart with variables', async ({ page }) => {
    const selectEspressoLocator = page.locator('[data-test="Espresso"]');
    const cartButtonLocator = page.locator('a[aria-label="Cart page"]');
    const addOneEspressoLocator = page.getByRole('button', { name: 'Add one Espresso' });
    const espressoExistLocator = page.locator('#app');
    const checkoutLocator = page.locator('//button[@data-test="checkout"]');
    const nameFillLocator = page.locator('//input[@id="name"]');
    const emailFillLocator = page.locator('//input[@id="email"]');
    const promotionCheckLocator = page.locator('//input[@id="promotion"]');
    const submitPaymentLocator = page.locator('//button[@id="submit-payment"]');
    const snackbarSuccessLocator = page.locator('//div[@class="snackbar success"]');


    await selectEspressoLocator.click();
    await cartButtonLocator.click();
    await addOneEspressoLocator.click();
    await expect(espressoExistLocator).toContainText('$10.00 x 2');
    await checkoutLocator.click();
    await nameFillLocator.fill('Nazar');
    await emailFillLocator.fill('test@gmail.com');
    await promotionCheckLocator.check();
    await submitPaymentLocator.click();
    await expect(snackbarSuccessLocator).toContainText('Thanks for your purchase. Please check your email for payment.');
});