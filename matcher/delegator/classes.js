var parseClassNames = require('../../lib/selectorParse').parseClassNames;

function builder(chai, utils) {
  function classes() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var sel = tree.sel;
    var classNames = parseClassNames(sel);
    utils.flag(this, 'object', classNames);
  }
  return classes;
}

module.exports = builder;
