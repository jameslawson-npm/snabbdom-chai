var expect = require('chai').expect;

var contains = require('../../lib/snabbdomContains');
var h = require('snabbdom/h');

describe('snabbdom contains - by children', function() {

  it('should check if a singleton tree contains a subtree by class', function() {
    expect(contains(h('div.foo'), { children: 0 })).to.be.true;
  });

  it('should check if a singleton tree contains a subtree by class', function() {
    expect(contains(h('div.foo'), { children: 2 })).to.be.false;
  });

  it('should check children count for nested subtrees', function() {
    var tree = h('div', [
      h('div', [
        h('span')
      ]),
      h('div', [
        h('span'),
        h('span')
      ]),
      h('div', [
        h('span'),
        h('span'),
        h('span')
      ])
    ]);
    expect(contains(tree, { children: 3 })).to.be.true;
    expect(contains(tree, { children: 4 })).to.be.false;
  });

});
