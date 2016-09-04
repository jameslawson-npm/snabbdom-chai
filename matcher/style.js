var subset = require('../lib/objectSubset');
var styleParse = require('../lib/styleParse');

function builder(chai, utils) {
  function style(style) {
    var tree = this._obj;
    var rootStyleAttr = (tree.data && tree.data.style) || {};
    var rootStyle = styleParse(rootStyleAttr);
    var passes = subset(style, rootStyle);

    var ERR_MSG = 'expected #{this} to have matching styles';
    var NOT_MSG = 'expected #{this} to not have matching styles';
    this.assert(passes, ERR_MSG, NOT_MSG);
  }

  return style;
}

module.exports = builder;
