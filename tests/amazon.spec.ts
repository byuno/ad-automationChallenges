import { test, expect } from '@playwright/test';

test('Go to Amazon', async ({ page }) => {
    await page.goto('https://www.amazon.ca/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Amazon.ca: Low Prices – Fast Shipping – Millions of Items');
  });