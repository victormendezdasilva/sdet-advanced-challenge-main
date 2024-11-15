import { Page } from "@playwright/test";

export class SearchModal {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get locationInput() {
    return this.page.locator("#location");
  }

  get saveChangesButton() {
    return this.page.locator("#save-changes-button");
  }

  async modifyLocation(location: string) {
    await this.locationInput.fill(location);
    await this.saveChangesButton.click();
  }
}
