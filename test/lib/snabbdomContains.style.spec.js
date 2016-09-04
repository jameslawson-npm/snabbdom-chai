var expect = require('chai').expect;

var contains = require('../../lib/snabbdomContains');
var h = require('snabbdom/h');

describe('snabbdom contains - by styles', function() {

  it('should check if a tree with three children contains a subtree by styles', function() {
    var tree = h('div', [
        h('span', 'foo1'),
        h('span', { attributes: { style: 'top: 10px; bottom: 5px; background: red' } }),
        h('span', 'foo2')
    ]);

    expect(contains(tree, {
      styles: {
        background: 'red',
        bottom: '5px',
        top: '10px'
      }
    })).to.be.true;

  });

});
