import { test, expect } from '@playwright/test';
import { CareersPage } from '../pages/careers.page';
import { HomePage } from '../pages/home.page';
import fs from 'fs';
  
test.describe('Asserting the team and saving the titles', () => {
    let homePage: HomePage;
    let careersPage: CareersPage;
    //Before every test, navigate to Careers page, accept cookies and assert that correct page is displayed
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        careersPage = new CareersPage(page);
        await page.goto('/careers');
        await homePage.acceptCookies();
        await expect (careersPage.heading1).toBeVisible();
    })    

  test('Assert the team', async ({ page }) => {
    //Filter by QA, check and print how many open positions are displayed
      await page.waitForTimeout(1000);
      await careersPage.qaFilter.click();
      await page.waitForTimeout(1000);
      const positions = careersPage.openPosition;
      const allPositions = await positions.count();
      console.log(`Found "${allPositions}" elements with the class "${positions}"`);
      await page.waitForTimeout(1000);
        //Check and print titles of the open positions, find Senior QA Specialist and assert that the team is EtonDigital
        for (let i = 0; i < allPositions; i++) {
          const currentPosition=positions.nth(i);
          const currentPositionTitle=await currentPosition.locator('h3').innerText();
          console.log('Current open position is '+currentPositionTitle);
            if (currentPositionTitle=='Senior QA Specialist'){
            await currentPosition.scrollIntoViewIfNeeded();
            const currentTeam = await currentPosition.locator('span').innerText();
            console.log('Current team is '+currentTeam);
            expect (currentTeam).toEqual(expect.stringContaining('EtonDigital'));
            break
            }
            else continue;
        }
  });

  test('Save the titles', async ({ page }) => {
      //Define variable to store the titles, filter by Serbia and scroll to the button Show More
      await page.waitForTimeout(1000);
      const titles: string[] = [];
      await careersPage.serbiaFilter.click();
      await page.waitForTimeout(1000);
      await careersPage.showMoreBtn.scrollIntoViewIfNeeded();
      //Click on button Show more as many time as needed until become invisible and print how many times is clicked
      //Also, print button visibillity/invisibillity based on the current state
      const showMoreButton = careersPage.showMoreBtn;
      const buttonIsVisible = await showMoreButton.isVisible();
        if (buttonIsVisible) {
          console.log('Button is visible.');
          let clickCount = 0;
          while (await showMoreButton.count() > 0 && await showMoreButton.isVisible()) {
            console.log(`Clicking button for the ${clickCount + 1} time.`);
            await showMoreButton.click();
            await page.waitForTimeout(1000);
            clickCount++;
          }
        } 
        else {
          console.log('Button is not visible.');
        }
      //Check and print how many open positions are displayed
      const positions = careersPage.openPosition;
      const allPositions = await positions.count();
      console.log(`Found ${allPositions} elements with the class "${positions}"`);
      await page.waitForTimeout(1000);
        //Check and print titles of the open positions, add every title to the array
        for (let i = 0; i < allPositions; i++) {
          const currentPosition=positions.nth(i);
          const currentPositionTitle=await currentPosition.locator('h3').innerText();
          console.log('Current open position is '+currentPositionTitle);
          if (currentPositionTitle) {
            titles.push(currentPositionTitle.trim());
          }
        }
      //Create a unique name of .txt file including timestamp and add every title to the new line in it
      //Also, print the name of created .txt file and assert that at least one title was found
      const fileNameTimestamp = (new Date().getTime()).toString().substring(4);
      const filePath = `titles_${fileNameTimestamp}.txt`; 
      const fileContent = titles.join('\n');
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`Titles have been saved to ${filePath}`);
      expect(titles.length).toBeGreaterThan(0);
  });
});