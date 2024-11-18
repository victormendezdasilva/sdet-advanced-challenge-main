import { expect, Page } from "@playwright/test";

export class SearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get title() {
    return this.page.locator("#search-title");
  }

  get results() {
    return this.page.locator("[id^='card-']").all();
  }

  get navigationBar() {
    return this.page.locator("nav[role='navigation']");
  }

  get searchingIcon() {
    return this.page.locator("#searching-icon");
  }

  get modifySearchButton() {
    return this.page.locator("#modify-search-button");
  }

  async clickModifySearch() {
    await this.modifySearchButton.click();
  }

  async verifyPageIsLoadCorrectly() {
    await expect(this.title).toBeVisible();
    await expect(this.searchingIcon).toHaveCount(0);
    await expect(this.modifySearchButton).toBeVisible();
  }
}
