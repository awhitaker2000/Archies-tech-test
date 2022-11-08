module.exports = class Homepage {
  open(path) {
    return browser.url(`/${path}`);
  }
};
