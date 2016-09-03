function builder(chai, utils) {
  function children(children) {
    var tree = this._obj;
    var actual = (tree.children && tree.children.length) || 0;
    var expected = children;
    var passes = actual === expected;

    var ERR_MSG = 'expected #{this} to have #{exp} children but instead got #{act}';
    var NOT_MSG = 'expected #{this} to not have #{exp} children but got #{act}';
    this.assert(passes, ERR_MSG, NOT_MSG, expected, actual);
  }
  return children;
}

module.exports = builder;
