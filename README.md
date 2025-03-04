```{note}
Senior QA assignment
Holycode website E2E tests

This assignment contains tests for assertion of 
heading 1 on homepage, but also assertion of the team
(from open QA position item) and saving the titles 
(from all open positions in Serbia) on Careers page.
Text files including titles will be saved to the
project directory, within unique file name, including
timestamp.
```

**Table of content:**
- [1. Installation](#1-installation)
- [2. Setup](#2-setup)
- [3. Usage](#3-usage)
- [4. Contributing](#4-contributing)

<!-- heading 1 -->
<a id="1-installation"></a>
## 1. Installation
Follow these steps to install and set up the project.

- Clone the repository (using the web URL):
```{note}
https://github.com/MilovanNS/e2e-tests.git
```

- Navigate to the project directory:
```{note}
cd project-name
```

- Install the project dependencies (this will install Playwright and all necessary dependencies defined in package.json.):
```{note}
npm install
```

<!-- heading 2 -->
<a id="2-setup"></a>
## 2. Setup

After installing the dependencies, you'll need to set up your environment.

- Install Playwright Browsers: Playwright requires browser binaries to run the tests. You can install them with the following command (this will download the supported browsers - Chromium, Firefox, and WebKit):
```{note}
npx playwright install
```

<!-- heading 3 -->
<a id="3-usage"></a>
## 3. Usage
To run the Playwright tests, you can use the following commands:
- Run tests in a browser:
Playwright supports running tests in different browsers. You can run tests using (by default, this will run all tests in all browsers specified in your config file - in this case Chromium):
```{note}
npx playwright test
```
- Run tests in headed mode:
Playwright tests are run in headless mode by default, once we set it differently in playwright.config.ts file. But anyway, If you want to see the browser UI while running tests, you can pass the --headed flag:
```{note}
npx playwright test --headed
```
- There is also an option to run the test, which will open a UI where you can view and manage your test files, run tests interactively, see real-time results and logs, inspect failures with screenshots and video recordings (if configured), by running this command:
```{note}
npx playwright test --ui
```
To open last HTML report run:
```{note}
npx playwright show-report
```

<!-- heading 4 -->
<a id="4-contributing"></a>
## 4. Contributing

Contributors are welcome! If you want to contribute to this project, follow these steps:

- Fork the repository
- Create a new branch (git checkout -b feature-branch)
- Make your changes
- Commit your changes (git commit -am 'Add new feature')
- Push your changes (git push origin feature-branch)
- Open a Pull Request.