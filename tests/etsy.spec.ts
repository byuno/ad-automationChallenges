import { test, expect } from '@playwright/test';

test('Exercise #6 - Adding to Etsy Favorites', async({ page }) => {
    await page.goto('https://www.etsy.com/')
    
    //Workaround to bypass the "are you a human" checkpoint
    await page.reload();

    //Click on Categories button
    await page.getByRole('button', {name: 'Categories'}).click();

    //Click on Electronics & Accessories menu item
    await page.getByRole('menuitem', {name: 'Electronics & Accessories'}).click()
    await page.reload();
    await page.reload();
})