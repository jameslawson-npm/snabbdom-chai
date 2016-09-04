var chai = require('chai');
var expect = chai.expect;
var h = require('snabbdom/h');

chai.use(require('../index'));

describe('subtree', function() {

  it('should find a subtree by tag', function() {
    var tree = h('div');
    expect(tree).to.have.subtree.with.tag('div').inside;
    expect(tree).to.not.have.subtree.with.tag('span').inside;
  });

  it('should find a subtree by class', function() {
    var tree = h('div.foo');
    expect(tree).to.have.subtree.with.class('foo').inside;
    expect(tree).not.to.have.subtree.with.class('bar').inside;
  });

  it('should find a subtree by text', function() {
    var tree = h('span', 'hello');
    expect(tree).to.have.subtree.with.text('hello').inside;
    expect(tree).not.to.have.subtree.with.text('world').inside;
  });

  it('should find a subtree by many classes', function() {
    var tree = h('div.foo.bar.baz');
    expect(tree).to.have.subtree.with.classes(['foo']).inside;
    expect(tree).to.have.subtree.with.classes(['bar', 'foo']).inside;
    expect(tree).to.have.subtree.with.classes(['baz', 'bar', 'foo']).inside;

    expect(tree).not.to.have.subtree.with.classes(['bob']).inside;
    expect(tree).not.to.have.subtree.with.classes(['baz', 'bar', 'foo', 'bob']).inside;
  });

  it('should find a subtree by number of children', function() {
    var tree = h('div', [ h('span'), h('span'), h('span') ]);
    expect(tree).to.have.a.subtree.with.tag('div').children(3).inside;
    expect(tree).not.to.have.a.subtree.with.tag('div').children(1).inside;
  });

  it('should find a subtree by tag and styles', function() {
    var tree = h('div', [ h('a', { style: 'width: 20px; top: 0px; left: 10px' }) ]);
    expect(tree).to.have.a.subtree.with.style({ left: '10px' }).inside;
    expect(tree).to.have.a.subtree.with.style({ left: '10px', top: '0px' }).inside;
    expect(tree).to.have.a.subtree.with.style({ left: '10px', top: '0px', width: '20px' }).inside;

    expect(tree).not.to.have.a.subtree.with.style({ right: '50px' }).inside;
    expect(tree).not.to.have.a.subtree.with.style({ right: '50px', left: '10px', top: '0px', width: '20px' }).inside;
  });

  it('should find a subtree by tag and class and styles and children', function() {
    var tree = h('div.foo', { style: 'background: red' }, [ h('span'), h('span'), h('span') ]);
    expect(tree).to.have.subtree.with.tag('div').class('foo').style({ background: 'red' }).and.children(3).inside;
  });

});

