import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.samsung.com/ca/smartphones/');
  await page.getByRole('link', { name: 'New Galaxy S24 Ultra Online' }).click();
  await page.locator('.s-exclusive-color__swiper-inner > .s-option-box > .hubble-pd-radio__label > .s-label > .s-label-inner').first().click();
  await expect(page.getByRole('button', { name: 'Galaxy S24 Ultra in Titanium' })).toBeVisible();
});