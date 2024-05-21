import { test, expect } from '@playwright/test';

test('Exercise #3 - Add Ikea furniture to shopping list', async ({ page }) => {
    await page.goto('https://www.ikea.com/ca/en/');

    const shopProductsButton = page.locator('hnf-overflow-carousel__content').getByText('Explore rooms')
    await shopProductsButton.click();

    // const bedAndMattressButton = page.locator('.hnf-carousel__tabs-navigation-products').getByRole("button", {name: 'Beds & mattresses'});
    // await bedAndMattressButton.click();

})