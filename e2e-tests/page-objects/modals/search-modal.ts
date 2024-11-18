import { Page } from "@playwright/test";

export class SearchModal {
  constructor(private page: Page) {}

  get locationInput() {
    return this.page.locator("#location");
  }

  get saveChangesButton() {
    return this.page.locator("#save-changes-button");
  }

  get checkInButton() {
    return this.page.locator("#check-in");
  }

  get checkOutButton() {
    return this.page.locator("#check-out");
  }

  get guestsButton() {
    return this.page.locator("#guests");
  }

  get clearButton() {
    return this.page.locator("#clear");
  }

  async saveChanges() {
    await this.saveChangesButton.click();
  }

  async modifyLocation(location: string) {
    await this.locationInput.fill(location);
    await this.saveChangesButton.click();
  }
}
