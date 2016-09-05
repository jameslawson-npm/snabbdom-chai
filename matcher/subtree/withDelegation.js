var SUBTREE_FLAG = require('./flags').SUBTREE;

function withDelegation(matcher) {
  function builder(chai, utils) {
    return function() {
      if (utils.flag(this, 'saveobject')) {
        utils.flag(this, 'object', utils.flag(this, 'saveobject'));
      }
      matcher(chai, utils).apply(this, arguments);
    }
  }
  return builder;
}


module.exports = withDelegation;
