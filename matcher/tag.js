function builder(chai, utils) {
  function tag(tag) {
    var tree = this._obj;

    var SELECTOR_TAG_NAME = /([A-Za-z0-9]*)([.#])?/;
    var matches = tree.sel.match(SELECTOR_TAG_NAME);
    var selectorName = (matches && matches[1]) || '';

    var actualName = selectorName.toLowerCase();
    var expectedName = tag.toLowerCase();
    var passes = actualName === expectedName;

    var ERR_MSG = 'expected #{this} to have a tag #{exp} but got #{act}';
    var NOT_MSG = 'expected #{this} to not have a tag #{exp} but got #{act}';
    this.assert(passes, ERR_MSG, NOT_MSG, expectedName, actualName);
  }
  return tag;
}

module.exports = builder;
