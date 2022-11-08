const Homepage = require("./Homepage");
class pageItems extends Homepage {
  get cookieAccept() {
    return $('[id="onetrust-accept-btn-handler"]');
  }
  get loginButton() {
    return $('[class*="_f92fbce _e24a5dc _e637394 _0a2fdd9"]');
  }
  get loginModal() {
    return $('[class*="_dea1acf _978e037"]');
  }
  get promotionsButton() {
    return $('[id="link__promotions"]');
  }
  get promotionsPage() {
    return $('[class*="promotions promotions--list"]');
  }
  get inPlayButton() {
    return $('[id="sportList__link__inplay"]');
  }
  get inPlayContainer() {
    return $('[class*="market h2h in-play active soccer"]');
  }
  get oddsFormatButton() {
    return $('[class*="currentFormat"]');
  }
  get oddsFormatList() {
    return $('[class*="dropdown"]');
  }
  get allMarketsButton() {
    return $('[id="showExtendedMenu"]');
  }
  get marketsContainer() {
    return $('[id="extendedMenu__container"]');
  }

  async closeCookieBanner() {
    await this.cookieAccept.click();
  }
}

module.exports = new pageItems();
