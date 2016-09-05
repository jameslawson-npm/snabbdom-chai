var find = require('../../lib/snabbdomFind');

function builder(chai, utils) {
  function root(klass) {
    var tree = this._obj;
    var subtree = find(tree, klass);
    utils.flag(this, 'object', subtree);
  }
  return root;
}

module.exports = builder;
