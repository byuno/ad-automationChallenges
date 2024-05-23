import { test, expect } from '@playwright/test';

test('Exercise #5 - Verify Samsung.com exclusive colours', async({page}) => {
    await page.goto('http://www.samsung.com/');
})