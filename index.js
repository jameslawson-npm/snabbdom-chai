var tag = require('./matchers/tag');
var klass = require('./matchers/class');
var classes = require('./matchers/classes');
var style = require('./matchers/style');

function plugin(chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('tag', tag(chai, utils));
  Assertion.addMethod('class', klass(chai, utils));
  Assertion.addMethod('classes', classes(chai, utils));
  Assertion.addMethod('style', style(chai, utils));
}

module.exports = plugin;
