function builder(chai, utils) {
  function attribute(key, value) {
    var tree = this._obj;
    var actual = tree.data.attrs && tree.data.attrs[key];
    var expected = value;

    var passes = actual === expected;
    var ERR_MSG = 'expected #{this} to have #{exp} but instead got #{act}';
    var NOT_MSG = 'expected #{this} to not have #{exp} but got #{act}';
    this.assert(passes, ERR_MSG, NOT_MSG, expected, actual);
  }
  return attribute;
}

module.exports = builder;
