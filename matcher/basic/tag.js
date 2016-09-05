var parseTag = require('../../lib/selectorParse').parseTag;

function builder(chai, utils) {
  function tag(tag) {
    var tree = this._obj;

    var actualName = parseTag(tree.sel);
    var expectedName = tag.toLowerCase();

    var passes = actualName === expectedName;
    var ERR_MSG = 'expected #{this} to have a tag #{exp} but got #{act}';
    var NOT_MSG = 'expected #{this} to not have a tag #{exp} but got #{act}';
    this.assert(passes, ERR_MSG, NOT_MSG, expectedName, actualName);
  }
  return tag;
}

module.exports = builder;
