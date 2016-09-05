var includes = require('lodash.includes');
var parseClassNames = require('../../lib/selectorParse').parseClassNames;

function builder(chai, utils) {
  function klass(name) {
    var tree = this._obj;
    var sel = tree.sel;
    var classNames = parseClassNames(sel);

    var passes = includes(classNames, name);
    var ERR_MSG = 'expected #{this} to have class #{exp}';
    var NOT_MSG = 'expected #{this} to not have a class #{exp}';
    this.assert(passes, ERR_MSG, NOT_MSG, name);
  }

  return klass;
}

module.exports = builder;
