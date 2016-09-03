function builder(chai, utils) {
  function text(text) {
    var tree = this._obj;

    var actualText = tree.text;
    var expectedText = text;

    var passes = actualText === expectedText;
    var ERR_MSG = 'expected #{this} to have text #{exp}';
    var NOT_MSG = 'expected #{this} to not have have text #{exp}';
    this.assert(passes, ERR_MSG, NOT_MSG, 'x', 'x');
  }
  return text;
}

module.exports = builder;
