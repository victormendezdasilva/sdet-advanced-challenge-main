import { HomePage } from "../page-objects/home-page.ts";
import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("Home Page should load as expected", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(homePage.searchInput).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await expect(homePage.header.homeIcon).toBeVisible();
    await expect(homePage.header.rentals).toBeVisible();
    await expect(homePage.header.about).toBeVisible();
    await expect(homePage.header.contact).toBeVisible();
    await expect(homePage.searcherSection).toBeVisible();
    await expect(homePage.featuredPropertiesSection).toBeVisible();
    await expect(homePage.whyChooseUsSection).toBeVisible();
  });
});
