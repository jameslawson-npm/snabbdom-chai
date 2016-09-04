var foreach = require('lodash.foreach');
var contains = require('./lib/snabbdomContains');

function plugin(chai, utils) {

  // decorate a matcher with the ability
  // to be used in a subtree expectation
  var SUBTREE_FLAG = 'subtree';
  function withSubtree(flag, matcher) {
    return function() {
      if (utils.flag(this, SUBTREE_FLAG)) {
        var value = arguments[0];
        utils.flag(this, flag, value);
      } else {
        matcher(chai, utils).apply(this, arguments);
      }
    }
  }
  chai.Assertion.addProperty('subtree', function() {
    utils.flag(this, SUBTREE_FLAG, true);
  });

  chai.Assertion.addProperty('inside', function() {
    var tree = this._obj;
    var children = utils.flag(this, 'subtree.children');
    var klass    = utils.flag(this, 'subtree.class');
    var classes  = utils.flag(this, 'subtree.classes');
    var tag      = utils.flag(this, 'subtree.tag');
    var text     = utils.flag(this, 'subtree.text');
    var style    = utils.flag(this, 'subtree.style');

    var classNames = (klass) ? [klass] : classes;
    var found = contains(tree, {
      children: children,
      classNames: classNames,
      style: style,
      tag: tag,
      text: text
    });
    var ERR_MSG = 'expected #{this} to have a matching subtree';
    var NOT_MSG = 'expected #{this} to not have a matching subtree';
    this.assert(found, ERR_MSG, NOT_MSG);
  });

  foreach([
    'attribute',
    'children',
    'class',
    'classes',
    'style',
    'tag',
    'text',
  ], function(name) {
    var matcher = require('./matcher/' + name);
    var flag = 'subtree.' + name;
    chai.Assertion.addMethod(name, withSubtree(flag, matcher));
  });

}

module.exports = plugin;
