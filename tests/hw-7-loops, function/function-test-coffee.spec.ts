import test, { expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
});

function selectEspressoLocator(page: Page) {
    return page.locator('[data-test="Espresso"]');
};

function cartButtonLocator(page: Page) {
    return page.locator('a[aria-label="Cart page"]');
};

function addOneEspressoLocator(page: Page) {
    return page.getByRole('button', { name: 'Add one Espresso' });
};

function checkoutLocator(page: Page) {
    return page.locator('//button[@data-test="checkout"]');
};

function nameFillLocator(page: Page) {
    return page.locator('//input[@id="name"]');
};

function emailFillLocator(page: Page) {
    return page.locator('//input[@id="email"]');
};

function promotionCheckLocator(page: Page) {
    return page.locator('//input[@id="promotion"]');
};

function submitPaymentLocator(page: Page) {
    return page.locator('//button[@id="submit-payment"]');
};

function snackbarSuccessLocator(page: Page) {
    return page.locator('//div[@class="snackbar success"]');
};

test('add coffee to the cart with variables', async ({ page }) => {
    await selectEspressoLocator(page).click();
    await cartButtonLocator(page).click();
    await addOneEspressoLocator(page).click();
    await checkoutLocator(page).click();
    await nameFillLocator(page).fill('Nazar');
    await emailFillLocator(page).fill('test@gmail.com');
    await promotionCheckLocator(page).click();
    await submitPaymentLocator(page).click();
    await expect(snackbarSuccessLocator(page)).toContainText('Thanks for your purchase. Please check your email for payment.')
});
