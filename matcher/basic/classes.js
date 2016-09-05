var subset = require('../../lib/arraySubset');
var parseClassNames = require('../../lib/selectorParse').parseClassNames;

function builder(chai, utils) {
  function classes(names) {
    var tree = this._obj;
    var sel = tree.sel;
    var classNames = parseClassNames(sel);

    var passes = subset(names, classNames);
    var ERR_MSG = 'expected #{this} to have classes #{exp}';
    var NOT_MSG = 'expected #{this} to not have a classes #{exp}';
    this.assert(passes, ERR_MSG, NOT_MSG, names.join(' '));
  }

  return classes;
}

module.exports = builder;
