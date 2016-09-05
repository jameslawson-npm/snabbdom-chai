var forown = require('lodash.forown');
var SUBTREE_FLAGS = require('./matcher/subtree/flags');

function plugin(chai, utils) {

  // basic expectations
  var withSubtree = require('./matcher/subtree/withSubtree')(chai, utils);
  var matchers = {
    attribute: require('./matcher/attribute')(chai, utils),
    children: withSubtree(require('./matcher/children'), SUBTREE_FLAGS.CHILDREN),
    class: withSubtree(require('./matcher/class'), SUBTREE_FLAGS.CLASS),
    classes: withSubtree(require('./matcher/classes'), SUBTREE_FLAGS.CLASSES),
    style: withSubtree(require('./matcher/style'), SUBTREE_FLAGS.STYLE),
    tag: withSubtree(require('./matcher/tag'), SUBTREE_FLAGS.TAG),
    text: withSubtree(require('./matcher/text'), SUBTREE_FLAGS.TEXT),
  }
  forown(matchers, function(matcher, name) {
    chai.Assertion.addMethod(name, matcher);
  });

  // subtree expectations
  chai.Assertion.addProperty('subtree', require('./matcher/subtree/subtree')(chai, utils));
  chai.Assertion.addProperty('inside', require('./matcher/subtree/inside')(chai, utils));
  chai.Assertion.addProperty('subtree', require('./matcher/subtree/subtree')(chai, utils));

  // locating
  // chai.Assertion.addProperty('root', require('./matcher/root/root')(chai, utils));
}

module.exports = plugin;
