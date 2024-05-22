import { test, expect } from '@playwright/test';

test('Exercise #4 - Verify category list', async ({page})=> {
    await page.goto('https://www.sony.com/en/SonyInfo/design/stories/')

    //Click on Product Category
    await page.locator('.tag-list-heading').getByRole('listitem').filter({hasText: 'Product'}).click()

    //Select the cards that are filtered
    const productCategoryCard = await page.locator('.pdt-index .active')

    //Count how many are filtered
    const countCards = await productCategoryCard.count();
    console.log(await productCategoryCard.count())
 
    //Verify each card has Product on them
    for (let i = 0; i < countCards - 1; i++) {
        const categoryOnCard = page.locator('.pdt-index .active').nth(i).locator('.category-tag');
        await expect(categoryOnCard).toContainText('Product');
    }
})