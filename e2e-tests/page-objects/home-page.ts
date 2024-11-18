import { Page } from "@playwright/test";

export class HomePage {
  header: Header;

  constructor(private page: Page) {
    this.header = new Header(page);
  }

  get searcherSection() {
    return this.page.locator("#search-button");
  }

  get featuredPropertiesSection() {
    return this.page.locator("#featured-properties-section");
  }

  get whyChooseUsSection() {
    return this.page.locator("#why-choose-us-section");
  }

  get searchInput() {
    return this.page.locator("#search-input");
  }

  get searchButton() {
    return this.page.locator("#search-button");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async searchLocation(location: string) {
    await this.searchInput.fill(location);
    await this.searchButton.click();
  }
}

class Header {
  constructor(private page: Page) {}

  get homeIcon() {
    return this.page.locator("#home-icon");
  }

  get rentals() {
    return this.page.locator("#rentals-header");
  }

  get about() {
    return this.page.locator("#about-header");
  }

  get contact() {
    return this.page.locator("#contact-header");
  }
}
