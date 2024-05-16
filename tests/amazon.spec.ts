import { test, expect } from '@playwright/test';

//Using wish list since I couldn't find Watchlis
test.only('Exercise #1 - Click on Wish List while logged out', async ({ page }) => {
    await page.goto('https://www.amazon.ca/');
  

  });

  test('Exercise #2 - Change the currency while logged out', async ({ page, context }) => {
    await page.goto('https://www.amazon.ca/');
    
    await page.getByLabel('Choose a language for shopping.').first().hover()
    
    await page.getByText('Change country/region.').first().click()

    await expect(page.getByText("Website (Country/Region)")).toBeVisible()

    const canadaDropDown = page.locator('.a-dropdown-prompt')
    await canadaDropDown.click()
    
    await page.getByRole("listbox").getByText('Japan (日本)').click()
    
    const pagePromise = context.waitForEvent('page');
    
    //Use dispatched events to overcome 'intercepts pointer event' issue I was getting.
    const goToWebsiteButton = page.locator('#icp-save-button #icp-save-button-announce')
    await goToWebsiteButton.getByText(' Go to website ').dispatchEvent('click');
    
    const newPage = await pagePromise;
    
    await expect(newPage).toHaveTitle('Amazon.co.jp | Books, Apparel, Electronics, Groceries & more');

    await newPage.getByLabel('Choose a language for shopping.').first().click();
    
    const currencyDropDown = newPage.locator(".a-dropdown-prompt");
    await expect(currencyDropDown).toHaveText('¥ - JPY - Japanese Yen (Default)');
  });