import { test, expect } from '@playwright/test';

test('Exercise #3 - Add Ikea furniture to shopping list', async ({ page }) => {
    await page.goto('https://www.ikea.com/ca/en/');

    // Click ok on the cookie pop up
    await page.getByRole('button', {name: 'Ok'}).first().click();
    
    // Click on the Beds and Mattresses link
    await page.getByRole('button', { name: 'Beds & mattresses' }).click();
    
    // Click on the Mattress section
    await page.getByRole('listitem').filter({hasText: 'Mattresses'}).nth(2).click()
    
    // Click on the first item in the results
    await page.locator('.plp-product__image-link').first().click()
    
    // Grab the article number to be used later in the cart
    const articleNumber = await page.locator('.pip-product__left-bottom-container .pip-product-identifier__value').textContent()
    console.log(articleNumber)
    
    // Add item to the cart
    await page.getByRole('button', {name: 'Add to cart'}).click()
    
    // Go to cart
    await page.getByLabel('Go to shopping bag', {exact: true}).click()
    
    // Get the article number in the cart
    const articleNumberCart = await page.getByTestId('product_list_product_group_items').locator('.cart-ingka-product-identifier__value').textContent()
    console.log(articleNumberCart)

    // Assert that the item selected orginally is in the cart
    expect(articleNumberCart).toEqual(articleNumber)

    // Assert there is only one item in the cart
    const itemCount = page.locator('.productControls_productControls__cIeR7 input[type=text]')
    await expect(itemCount).toHaveValue('1')
})