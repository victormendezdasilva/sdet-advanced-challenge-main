# SDET Technical Challenge: E2E Testing for Property Search Application

## Overview

This project is a take-home technical challenge for an advanced SDET (Software Development Engineer in Test) position. The goal is to implement end-to-end (e2e) tests for a property search application using either Playwright or WebdriverIO, set up continuous integration using GitHub Actions, and ensure the tests run on both desktop and mobile viewports.

## Important Information

- This is a fake project with mock data, where very limited functionality is actually implemented.
- The primary goal of this challenge is to demonstrate your testing skills, not to fix issues in the application.
- You should only address issues that directly prevent your tests from passing.
- You are allowed and encouraged to add properties to help with selecting elements, such as ids, data-testid attributes, or any other technique you choose, as long as it doesn't break the UI or alter the user experience.
- Focus on writing robust, maintainable tests that would work in a real-world scenario, even if some parts of this application are simplified or mocked.

## Project Setup

This is a Next.js 14 application with TypeScript. Familiarize yourself with the project structure and components before proceeding with the test implementation.

## Challenge Requirements

1. Fork this repository to your own GitHub account.
2. Install the dependencies and run the Next.js application locally. We recommend using PNPM as the package manager, but you can use NPM or Yarn if you prefer.
3. Start the next.js application's dev server and ensure it runs correctly. Instructions on how to do this are provided at the end of this document.
4. Set up a TypeScript project for e2e testing using either Playwright or WebdriverIO.
5. Implement e2e tests covering the following scenarios:

### Scenario 1: Landing Page Load

- Open the landing page
- Verify that it loads correctly

### Scenario 2: Search Functionality

- Open the landing page
- Enter 'aspen' in the search input
- Press the search button
- Verify that:
  - The Search page is opened
  - The query parameter is correctly present in the URL
  - The page displays 1 result for an Aspen property

### Scenario 3: Modify Search

- Open the landing page
- Enter 'aspen' in the search input
- Press the search button
- Verify that the Search page is opened
- Click on 'Modify Search'
- Verify that 'Aspen' is set as the location

6. Ensure all tests run on both desktop and mobile viewports:

   - Desktop: Use a standard desktop resolution (e.g., 1920x1080)
   - Mobile: Use a common mobile resolution (e.g., 375x667 for iPhone 8)

7. Set up a GitHub Action that:
   - Triggers on every Pull Request to the main branch
   - Triggers on every push to the main branch
   - Runs the e2e tests in the GitHub Actions runner for both desktop and mobile viewports
   - Reports the test results in the GitHub Actions interface

## Evaluation Criteria

Your submission will be evaluated based on:

1. Correct implementation of the required scenarios
2. Proper implementation of viewport-specific tests (desktop and mobile)
3. Code quality and organization
4. Effective use of TypeScript
5. Proper use of assertions and error handling
6. Clear and concise test descriptions
7. Correct setup and configuration of GitHub Actions
8. Any additional tests or scenarios you choose to implement
9. Appropriate use of element selection techniques (e.g., adding ids or data-testid attributes)

## Submission Instructions

1. Fork this repository to your GitHub account
2. Implement your e2e tests in a new directory (e.g., `e2e-tests`)
3. Create a `.github/workflows` directory in your repository
4. Add a YAML file (e.g., `e2e-tests.yml`) in the `.github/workflows` directory to define your GitHub Action
5. Update this README with instructions on how to run your tests locally
6. If you've added any properties to aid in testing (e.g., data-testid attributes), document these changes
7. Submit a pull request to the original repository with your implementation

## Running the Tests Locally

To run the test locally use any of the following commands:

- Running tests for both views: `npm test`
- Running tests with the UI Runner: `npm run ui-test`
- Running tests for Desktop: `npm run test-desktop`
- Running tests for Mobile: `npm run test-mobile`
- Open the HTML report for the previous run: `npm run show-report`

## GitHub Actions Configuration

Your GitHub Actions workflow file (`.github/workflows/e2e-tests.yml`) should include steps to:

1. Set up the Node.js environment
2. Install dependencies
3. Build the Next.js application
4. Start the application in the background
5. Run the e2e tests for both desktop and mobile viewports
6. Report the test results

Here's a basic example of what your workflow file might look like:

```yaml
name: E2E Tests

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        viewport: [desktop, mobile]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"
      - run: npm ci
      - run: npm run build
      - run: npm start & npx wait-on http://localhost:3000
      - name: Run e2e tests
        run: npm run test:e2e:${{ matrix.viewport }}
      - name: Upload test results
        uses: actions/upload-artifact@v2
        if: failure()
        with:
          name: e2e-test-results-${{ matrix.viewport }}
          path: e2e-results/
```

# Instructions on how to run the Next.js app's dev server locally:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Final notes:

The job position we are looking for is an advanced SDET that would help defining, creating and maintaining the E2E testing strategy for our applications.
Good luck!! 🍀
