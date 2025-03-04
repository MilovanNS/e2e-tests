import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';  

test('Assert heading 1', async ({ page }) => {
      const homePage = new HomePage(page);
      await page.goto('');
      await homePage.acceptCookies();
      await expect (homePage.heading1).toHaveText('Tech Solutions to scale');
});