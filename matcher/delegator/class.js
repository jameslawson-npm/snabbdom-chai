var parseClassNames = require('../../lib/selectorParse').parseClassNames;
var first = require('lodash.first');

function builder(chai, utils) {
  function klass() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var sel = tree.sel;
    var classNames = parseClassNames(sel);
    utils.flag(this, 'object', first(classNames));
  }
  return klass;
}

module.exports = builder;
