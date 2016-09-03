var tag = require('./matchers/tag');
var klass = require('./matchers/class');
var classes = require('./matchers/classes');
var style = require('./matchers/style');
var children = require('./matchers/children');
var text = require('./matchers/text');
var attribute = require('./matchers/attribute');

function plugin(chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('tag', tag(chai, utils));
  Assertion.addMethod('class', klass(chai, utils));
  Assertion.addMethod('classes', classes(chai, utils));
  Assertion.addMethod('style', style(chai, utils));
  Assertion.addMethod('children', children(chai, utils));
  Assertion.addMethod('text', text(chai, utils));
  Assertion.addMethod('attribute', attribute(chai, utils));
}

module.exports = plugin;
