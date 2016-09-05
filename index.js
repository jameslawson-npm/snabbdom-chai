var forown = require('lodash.forown');

var withSubtree = require('./matcher/subtree/withSubtree');
var withDelegation = require('./matcher/subtree/withDelegation');
var SUBTREE_FLAGS = require('./matcher/subtree/flags');

function plugin(chai, utils) {

  // basic expectations
  var matchers = {
    attribute: require('./matcher/basic/attribute'),
    children: withDelegation(withSubtree(require('./matcher/basic/children'), SUBTREE_FLAGS.CHILDREN)),
    class: withDelegation(withSubtree(require('./matcher/basic/class'), SUBTREE_FLAGS.CLASS)),
    classes: withDelegation(withSubtree(require('./matcher/basic/classes'), SUBTREE_FLAGS.CLASSES)),
    style: withDelegation(withSubtree(require('./matcher/basic/style'), SUBTREE_FLAGS.STYLE)),
    tag: withDelegation(withSubtree(require('./matcher/basic/tag'), SUBTREE_FLAGS.TAG)),
    text: withDelegation(withSubtree(require('./matcher/basic/text'), SUBTREE_FLAGS.TEXT))
  };

  // delegating to core chai
  var delegators = {
    children: require('./matcher/delegator/children'),
    class: require('./matcher/delegator/class'),
    classes: require('./matcher/delegator/classes'),
    tag: require('./matcher/delegator/tag'),
    text: require('./matcher/delegator/text'),
    style: require('./matcher/delegator/style')
  };

  forown(matchers, function(matcher, name) {
    if (delegators[name]) {
      chai.Assertion.addChainableMethod(name, matcher(chai, utils), delegators[name](chai, utils));
    } else {
      chai.Assertion.addMethod(name, matcher(chai, utils));
    }
  });

  // subtree expectations
  chai.Assertion.addProperty('subtree', require('./matcher/subtree/subtree')(chai, utils));
  chai.Assertion.addProperty('inside', require('./matcher/subtree/inside')(chai, utils));

  // locating
  chai.Assertion.addMethod('root', require('./matcher/root/root')(chai, utils));
}

module.exports = plugin;
