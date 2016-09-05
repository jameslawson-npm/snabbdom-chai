function builder(chai, utils) {
  function text() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var rootText = tree.text;
    utils.flag(this, 'object', rootText);
  }
  return text;
}

module.exports = builder;
