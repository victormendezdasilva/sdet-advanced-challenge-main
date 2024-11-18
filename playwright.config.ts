import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e-tests/tests",
  timeout: 30000,
  retries: 3,
  workers: 1,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  expect: { timeout: 10000 },
  reporter: [["html", { outputFolder: "playwright-report" }]],
  projects: [
    {
      name: "Desktop Chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "Mobile WebKit",
      use: {
        browserName: "webkit",
        viewport: { width: 375, height: 667 },
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)",
      },
    },
  ],
});
