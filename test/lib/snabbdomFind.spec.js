var expect = require('chai').expect;

var find = require('../../lib/snabbdomFind');
var h = require('snabbdom/h');

describe('snabbdom find', function() {

  it('should return the root', function() {
    var tree = h('span.foo');
    expect(find(tree, 'foo').sel).to.equal('span.foo');
  });

  it('should return a third child', function() {
    var tree = h('div', [
      h('a.foo'),
      h('b.bar'),
      h('c.baz')
    ]);
    expect(find(tree, 'baz').sel).to.equal('c.baz');
  });

  it('should return a subchild nested deep', function() {
    var tree = h('a.foo', [ h('b.bar', [ h('c.baz', []) ]) ] );
    expect(find(tree, 'baz').sel).to.equal('c.baz');
  });

});
