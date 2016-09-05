function builder(chai, utils) {
  function children() {
    utils.flag(this, 'saveobject', this._obj);
    var tree = this._obj;
    var children = (tree.children && tree.children.length) || 0;
    utils.flag(this, 'object', children);
  }
  return children;
}

module.exports = builder;
