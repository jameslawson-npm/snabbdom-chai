var SUBTREE_FLAG = require('./flags').SUBTREE;

function builder(chai, utils) {
  function subtree() {
    utils.flag(this, SUBTREE_FLAG, true);
  }
  return subtree;
}

module.exports = builder;
