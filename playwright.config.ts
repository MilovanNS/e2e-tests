import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where tests are located
  retries: 1, // Number of retries for failing tests
  workers: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.holycode.com/' ,
    browserName: 'chromium',
    headless: true
  },
});