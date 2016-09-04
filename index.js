function plugin(chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('tag',       require('./matcher/tag')(chai, utils));
  Assertion.addMethod('class',     require('./matcher/class')(chai, utils));
  Assertion.addMethod('classes',   require('./matcher/classes')(chai, utils));
  Assertion.addMethod('style',     require('./matcher/style')(chai, utils));
  Assertion.addMethod('children',  require('./matcher/children')(chai, utils));
  Assertion.addMethod('text',      require('./matcher/text')(chai, utils));
  Assertion.addMethod('attribute', require('./matcher/attribute')(chai, utils));
}

module.exports = plugin;
