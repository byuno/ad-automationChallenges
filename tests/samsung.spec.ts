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

    await page.getByRole('menuitem', { name: 'Smartphones' }).click();
    
    await page.getByLabel('Galaxy S Samsung Galaxy').click();
    
    await page.getByRole('button', { name: 'Titanium violet selected' }).click();
    
    await page.getByLabel('Galaxy S24 Ultra', { exact: true }).first().click();
    
    await page.getByRole('tab', { name: 'Titanium Black' }).click();
    
    await expect(page.locator('#titanium-black div').nth(1)).toBeVisible();

})