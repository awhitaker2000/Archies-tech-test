const { Given, When, Then } = require("@wdio/cucumber-framework");

const Homepage = require("../pageobjects/pageItems.js");

Given(/^I am on the Homepage$/, async () => {
  await Homepage.open("");
});

When(/^I click the Login Button$/, async () => {
  await Homepage.closeCookieBanner();
  await Homepage.loginButton.waitForDisplayed();
  await Homepage.loginButton.click();
});

Then(/^Login modal should be opened$/, async () => {
  expect(await Homepage.loginModal.isDisplayed()).toBeTruthy();
});

When(/^I click Promotions in the Sports Nav list$/, async () => {
  await Homepage.promotionsButton.waitForDisplayed();
  await Homepage.promotionsButton.click();
});

Then(/^current promotions should be displayed$/, async () => {
  await Homepage.promotionsPage.waitForDisplayed();
});

When(/^I click on in-play category$/, async () => {
  await Homepage.inPlayButton.waitForDisplayed();
  await Homepage.inPlayButton.click();
});

Then(/^all current in-play matches should be displayed$/, async () => {
  await Homepage.inPlayContainer.waitForDisplayed();
});

Then(
  /^the current odds format should be visible on the odds format Button$/,
  async () => {
    await Homepage.oddsFormatButton.waitForDisplayed();
    expect(await Homepage.oddsFormatButton).toHaveTextContaining("Fractional");
  }
);

When(/^I click the odds format button$/, async () => {
  await Homepage.oddsFormatButton.click();
});

Then(/^the alternative odds format options should be displayed$/, async () => {
  await Homepage.oddsFormatList.waitForDisplayed();
});

When(/^I click the extended menu list$/, async () => {
  await Homepage.allMarketsButton.waitForDisplayed();
  await Homepage.allMarketsButton.click();
});

Then(/^all categories should be displayed in a drop down menu$/, async () => {
  await Homepage.marketsContainer.waitForDisplayed();
});
