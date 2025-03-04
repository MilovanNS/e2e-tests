import { Page, Locator } from '@playwright/test';
import { defineConfig } from '@playwright/test';

// Defining CareersPage class for asserting the team and saving the titles
export class CareersPage {
    readonly page: Page;
    readonly heading1: Locator;
    readonly qaFilter: Locator;
    readonly serbiaFilter: Locator;
    readonly openPosition: Locator;
    readonly showMoreBtn: Locator;

    // Initialization of page elements with selectors
    constructor(page: Page) {
        this.page = page;
        this.heading1 = page.getByRole('heading', { name: 'Join our team'})
        this.qaFilter = page.getByRole('button', { name: 'QA' });
        this.serbiaFilter = page.getByRole('button', { name: 'Serbia' });
        this.openPosition = page.locator('.c-careercard');
        this.showMoreBtn = page.getByText('Show More');
    }
}