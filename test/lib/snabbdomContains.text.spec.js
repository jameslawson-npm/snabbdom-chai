var expect = require('chai').expect;

var contains = require('../../lib/snabbdomContains');
var h = require('snabbdom/h');

describe('snabbdom contains - by text', function() {

  it('should check if a singleton tree contains a subtree by text', function() {
    expect(contains(h('div', 'foo'), { text: 'foo' })).to.be.true;
  });

  it('should check if a singleton tree doesn\'nt contain a subtree by text', function() {
    expect(contains(h('div', 'foo'), { text: 'bar' })).to.be.false;
  });

});
