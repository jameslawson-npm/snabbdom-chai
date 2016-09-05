var contains = require('../../lib/snabbdomContains');
var SUBTREE_FLAGS = require('./flags');

function builder(chai, utils) {
  function inside() {
    var tree = this._obj;
    var children = utils.flag(this, SUBTREE_FLAGS.CHILDREN);
    var klass    = utils.flag(this, SUBTREE_FLAGS.CLASS);
    var classes  = utils.flag(this, SUBTREE_FLAGS.CLASSES);
    var tag      = utils.flag(this, SUBTREE_FLAGS.TAG);
    var text     = utils.flag(this, SUBTREE_FLAGS.TEXT);
    var style    = utils.flag(this, SUBTREE_FLAGS.STYLE);

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
  }
  return inside;
}

module.exports = builder;

