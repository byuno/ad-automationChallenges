import { test, expect } from '@playwright/test';

// test('Exercise #1 - Click on Watchlist while logged out', async ({ page }) => {
//     await page.goto('https://www.amazon.ca/');
  
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle('Amazon.ca: Low Prices – Fast Shipping – Millions of Items');
//   });

  test.only('Exercise #2 - Change the currency while logged out', async ({ page, context }) => {
    await page.goto('https://www.amazon.ca/');
    
    await page.getByLabel('Choose a language for shopping.').first().hover()
    
    await page.getByText('Change country/region.').first().click()

    await expect(page.getByText("Website (Country/Region)")).toBeVisible()

    await page.getByText('Canada').nth(2).click();
    
    await page.getByRole("listbox").getByText('Japan (日本)').click()
    
    const pagePromise = context.waitForEvent('page');
    
    //Use dispatched events to overcome 'intercepts pointer event' issue I was getting. 
    await page.locator('#icp-save-button #icp-save-button-announce').getByText(' Go to website ').dispatchEvent('click');
    
    const newPage = await pagePromise;
    
    await newPage.getByLabel('Choose a language for shopping.').first().hover();

    //await page.locator('#nav-tools #icp-nav-flyout').waitFor(); 

    //await page.locator('#nav-tools #icp-nav-flyout').click();
  });