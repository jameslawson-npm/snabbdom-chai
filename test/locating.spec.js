var chai = require('chai');
var expect = chai.expect;
var h = require('snabbdom/h');
var _ = require('lodash');

chai.use(require('../index'));

describe('locating', function() {

  it('should locate a node by class and assert text', function() {
    var tree = h('div.foo', [h('div.bar', 'hello')]);
    expect(tree).at.root('bar').to.have.text('hello');
  });

  it('should locate a node by class and assert children count', function() {
    var tree = h('div', [
      h('.a'),
      h('.b', [ h('.b1'), h('.b2'), h('.b3') ]),
      h('.c', [ h('.c1') ])
    ]);
    expect(tree).at.root('a').to.have.children(0);
    expect(tree).at.root('b').to.have.children(3);
    expect(tree).at.root('c').to.have.children(1);
  });

  it('should locate a node by class and perform a subtree assertion', function() {
    var tree = h('div', [
      h('.a'),
      h('.b', [ h('.b1'), h('h1.b2'), h('.b3') ]),
      h('.c')
    ]);
    expect(tree).at.root('b').to.have.a.subtree.with.tag('h1').inside;
  });

});
