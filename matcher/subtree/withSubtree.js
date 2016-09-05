var SUBTREE_FLAG = require('./flags').SUBTREE;

function withSubtree(matcher, flag) {
  function builder(chai, utils) {
    return function() {
      if (utils.flag(this, SUBTREE_FLAG)) {
        var value = arguments[0];
        utils.flag(this, flag, value);
      } else {
        matcher(chai, utils).apply(this, arguments);
      }
    }
  }
  return builder;
}

module.exports = withSubtree;
