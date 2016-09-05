var chai = require('chai');
var expect = chai.expect;
var h = require('snabbdom/h');
var _ = require('lodash');

chai.use(require('../index'));

describe('chaining', function() {

  it('should allow basic expectations to be chained', function() {
    var tree = h('div.foo', { style: 'display: none'}, 'world');
    expect(tree).to.have.tag('div').and.text('world');
    expect(tree).to.have.class('foo').and.text('world').and.style({ display: 'none' });
  });

  it('should allow subtree expectatins to be chained ', function() {
    var tree = h('div', [
        h('div.foo', 'hello'),
        h('h1.bar', { style: 'color: red' }, 'world')
    ]);
    expect(tree).to.have.a.subtree.with.tag('div').with.class('foo').inside;
    expect(tree).to.have.a.subtree.with.tag('h1').class('bar').style({ color: 'red' }).and.text('world').inside;
  });

});
