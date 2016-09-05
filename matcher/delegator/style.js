var styleParse = require('../../lib/styleParse');

function builder(chai, utils) {
  function style() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var sel = tree.sel;

    var rootStyleAttr = (tree.data && tree.data.style) || '';
    var rootStyle = styleParse(rootStyleAttr);
    utils.flag(this, 'object', rootStyle);
  }
  return style;
}

module.exports = builder;
