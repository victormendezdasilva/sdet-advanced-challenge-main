import { SearchModal } from "../page-objects/modals/search-modal.ts";
import { SearchPage } from "../page-objects/search-page.ts";
import { HomePage } from "../page-objects/home-page.ts";
import { test, expect } from "@playwright/test";

test.describe("Search Functionality", () => {
  test("Search from Landing Page", async ({ page }) => {
    const query = "aspen";

    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.searchLocation(query);

    const searchPage = new SearchPage(page);
    await searchPage.verifyPageIsLoadCorrectly().then(async () => {
      const currentUrl = page.url();
      expect(currentUrl).toContain("?location=aspen");

      await searchPage.results.then((results) => {
        expect(results.length).toBe(1);
      });
    });
  });

  test("Modify Search", async ({ page }) => {
    const query = "aspen";

    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.searchLocation(query);

    const searchPage = new SearchPage(page);
    await searchPage.verifyPageIsLoadCorrectly();
    await searchPage.clickModifySearch();

    const searchModal = new SearchModal(page);
    await expect(searchModal.locationInput).toHaveAttribute("value", "aspen");
  });
});
