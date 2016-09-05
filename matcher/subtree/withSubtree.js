var SUBTREE_FLAG = require('./flags').SUBTREE;

function builder(chai, utils) {
  function withSubtree(matcher, flag) {
    return function() {
      if (utils.flag(this, SUBTREE_FLAG)) {
        var value = arguments[0];
        utils.flag(this, flag, value);
      } else {
        matcher(chai, utils).apply(this, arguments);
      }
    }
  }
  return withSubtree;
}

module.exports = builder;
