var expect = require('chai').expect;

var contains = require('../../lib/snabbdomContains');
var h = require('snabbdom/h');

describe('snabbdom contains - contains class', function() {

  it('should check if a singleton tree contains a subtree by class', function() {
    expect(contains(h('div.foo'), { classNames: ['foo'] })).to.be.true;
  });

  it('should check if a singleton tree doesn\'t contains a subtree by class', function() {
    expect(contains(h('div.foo'), { classNames: ['bar'] })).to.be.false;
  });

  it('should check if a tree with three children contains a subtree by class', function() {
    var tree = h('div', [h('div.x'), h('div.y'), h('div.z')]);
    expect(contains(tree, { classNames: ['y'] })).to.be.true;
  });

  it('should check if a tree subtree matching several classes', function() {
    var tree = h('div', [h('div'), h('div.x.y.z'), h('div')]);
    expect(contains(tree, { classNames: ['x', 'y', 'z'] })).to.be.true;
  });

});
