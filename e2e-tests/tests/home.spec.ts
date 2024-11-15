import { HomePage } from "../page-objects/home-page.ts";
import { test } from "@playwright/test";

test.describe("Home Page", () => {
  test("Landing Page Load", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyPageIsLoadCorrectly();
  });
});
