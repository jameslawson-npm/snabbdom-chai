var get = require('lodash.get');
var merge = require('lodash.merge');

var styleParse = require('../../lib/styleParse');

function builder(chai, utils) {
  function style() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var sel = tree.sel;

    var rootStyleData = get(tree.data, 'style', '');
    var rootStyleAttr = get(tree.data, 'attrs.style', '');

    var dataStyle = styleParse(rootStyleData);
    var attrStyle = styleParse(rootStyleAttr);
    var rootStyle = merge(dataStyle, attrStyle);

    utils.flag(this, 'object', rootStyle);
  }
  return style;
}

module.exports = builder;
