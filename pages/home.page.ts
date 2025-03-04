import { Page, Locator, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

// Defining HomePage class for h1 assertion and accepting cookies
export class HomePage {
    readonly page: Page;
    readonly heading1: Locator;
    //cookies
    readonly cookiesDialog: Locator;
    readonly allowAllCookies: Locator;

    // Initialization of page elements with selectors
    constructor(page: Page) {
        this.page = page;
        this.heading1 = page.locator('h1');
        //cookies
        this.cookiesDialog = page.getByRole('dialog').locator('#CybotCookiebotDialog');
        this.allowAllCookies = page.getByRole('dialog').locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }

    //Accept cookies method
    async acceptCookies() {
        await expect (this.allowAllCookies).toBeEnabled();
        await this.allowAllCookies.click();
        await this.page.waitForSelector('#CybotCookiebotDialog', { state: 'hidden' });
        await expect (this.cookiesDialog).not.toBeVisible();
    }
}