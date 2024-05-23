import { test, expect } from '@playwright/test';

test('Exercise #5 - Verify Samsung.com exclusive colours', async({page}) => {
    
    //Go to Samsung.com
    await page.goto('http://www.samsung.com/');

    //Click Accept All on the cookies modal
    const acceptAllBtn = await page.locator('.truste-consent-content #truste-consent-buttons').getByRole('button', {name: 'Accept All'});
    await acceptAllBtn.click();

    //Click on Mobile category
    const mobileMenuBtn = await page.getByRole('menubar').getByRole('listitem').getByRole('menuitem', {name: 'Mobile'})
    await mobileMenuBtn.hover();
    
})