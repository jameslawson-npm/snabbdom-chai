var parseTag = require('../../lib/selectorParse').parseTag;

function builder(chai, utils) {
  function tag() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var rootTag = parseTag(tree.sel);
    utils.flag(this, 'object', rootTag);
  }
  return tag;
}

module.exports = builder;
