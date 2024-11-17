import { SearchModal } from "../page-objects/modals/search-modal.ts";
import { SearchPage } from "../page-objects/search-page.ts";
import { HomePage } from "../page-objects/home-page.ts";
import { test, expect } from "@playwright/test";

test.describe("Search Functionality", () => {
  test("User can filter from Home Page and should be redirect to Search Page", async ({
    page,
  }) => {
    const query = "aspen";

    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.searchLocation(query);

    const searchPage = new SearchPage(page);
    await searchPage.verifyPageIsLoadCorrectly().then(async () => {
      expect(page.url()).toContain("?location=aspen");
      expect((await searchPage.results).length).toBe(1);
      expect((await searchPage.results)[0]).toContainText(
        "Cozy Mountain Cabin"
      );
    });
  });

  test("User can modify filter from Search Page", async ({ page }) => {
    const query = "aspen";

    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.searchLocation(query);

    const searchPage = new SearchPage(page);
    await searchPage.verifyPageIsLoadCorrectly();
    await searchPage.clickModifySearch();

    const searchModal = new SearchModal(page);
    await expect(searchModal.locationInput).toBeVisible();
    await expect(searchModal.checkInButton).toBeVisible();
    await expect(searchModal.checkOutButton).toBeVisible();
    await expect(searchModal.guestsButton).toBeVisible();
    await expect(searchModal.locationInput).toBeVisible();
    await expect(searchModal.locationInput).toBeVisible();
    await expect(searchModal.locationInput).toBeVisible();

    await expect(searchModal.locationInput).toHaveAttribute("value", "aspen");
    await searchModal.modifyLocation("Bali");
    await expect((await searchPage.results)[0]).toContainText(
      "Beachfront Villa"
    );
  });
});
