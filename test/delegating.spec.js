var chai = require('chai');
var expect = chai.expect;
var h = require('snabbdom/h');
var _ = require('lodash');

chai.use(require('../index'));

describe('delegating', function() {

  it('should expose tree\'s tag for delegation', function() {
    var tree = h('div', 'x');
    expect(tree).to.have.tag.equal('div');
  });

  it('should expose tree\'s children for delegation', function() {
    var tree = h('div', [ h('span'), h('span'), h('span') ]);
    expect(tree).to.have.children.that.is.equal(3);
  });

  it('should expose tree\'s class for delegation', function() {
    var tree = h('div.foo', 'x');
    expect(tree).to.have.a.class.that.is.equal('foo');
  });

  it('should expose tree\'s classes for delegation', function() {
    var tree = h('div.x.y.z', 'x');
    expect(tree).to.have.classes.that.include.members(['x', 'y']);
  });

  it('should expose tree\'s styles for delegation', function() {
    var tree = h('div.x.y.z', { style: 'left: 10px; top: 5px' });
    expect(tree).to.have.style.that.is.deep.equal({
      left: '10px',
      top: '5px'
    });
  });

  it('should expose tree\'s text for delegation', function() {
    var tree = h('div.foo', 'x');
    expect(tree).to.have.text.that.is.equal('x');
  });

});
