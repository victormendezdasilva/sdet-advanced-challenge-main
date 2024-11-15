import { expect, Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get searchInput() {
    return this.page.locator("#search-input");
  }

  get searchButton() {
    return this.page.locator("#search-button > svg");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async searchLocation(location: string) {
    await this.searchInput.fill(location);
    await this.searchInput.click();
    await this.searchButton.click();
  }

  async verifyPageIsLoadCorrectly() {
    await expect(this.searchInput).toBeVisible();
    await expect(this.searchButton).toBeVisible();
  }
}
