var expect = require('chai').expect;

var contains = require('../../lib/snabbdomContains');
var h = require('snabbdom/h');

describe('snabbdom contains - contains tag', function() {

  it('should check if a singleton tree contains a tag', function() {
    expect(contains(h('div'), { tag: 'div' })).to.be.true;
  });

  it('should check if a tree with three children contains a tag', function() {
    var tree = h('div', [h('h1'), h('h2'), h('h3')]);
    expect(contains(tree, { tag: 'h2' })).to.be.true;
  });

  it('should check if a tree doesn\'t contain a tag', function() {
    var tree = h('div', [h('h1'), h('h2'), h('h3')]);
    expect(contains(tree, { tag: 'h4' })).to.be.false;
  });

});
