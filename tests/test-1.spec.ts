import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ikea.com/ca/en/');
  await page.getByRole('button', { name: 'Beds & mattresses' }).click();
  await page.getByLabel('Submenu for Beds & mattresses').getByRole('link', { name: 'Mattresses', exact: true }).click();
  await page.getByRole('button', { name: 'Ok', exact: true }).click();
  await page.locator('.plp-product__image-link').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByLabel('Go to shopping bag').click();
});