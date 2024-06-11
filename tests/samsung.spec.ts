import { test, expect } from '@playwright/test';

test('Exercise #5 - Verify Samsung.com exclusive colours', async({page}) => {
    
    //Go to Samsung.com
    await page.goto('http://www.samsung.com/');

    //Click Accept All on the cookies modal
    const acceptAllBtn = await page.locator('.truste-consent-content #truste-consent-buttons').getByRole('button', {name: 'Accept All'});
    await acceptAllBtn.click();

    //Click on the location default (Canada/Eglish)
    const locAndLangBtn = await page.locator('.nv16-country-selector__select-contaniner').getByRole('button');
    await locAndLangBtn.click();

    //Click on hamburger menu
    const hamBtn = await page.locator('.nv00-gnb__utility-wrap .hamburger')
    await hamBtn.click();
    
    //Click on Mobile section
    await page.getByRole('menuitem', { name: 'Mobile' }).click();

    //Click on Smartphones link
    await page.getByRole('menuitem', { name: 'Smartphones' }).click();
    
    //Click on Samsung Galaxy link
    await page.getByLabel('Galaxy S Samsung Galaxy').click();
    
    //Click on device preview thumbnail
    await page.getByLabel('Galaxy S24 Ultra', { exact: true }).first().click();
    
    //Click on Titanium Black colour
    await page.getByRole('tab', { name: 'Titanium Black' }).click();
    
    //Using attributes to determine the correct image. 
    await expect(page.locator('#titanium-black div').nth(1)).toBeVisible();

})