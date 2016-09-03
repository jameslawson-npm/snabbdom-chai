var chai = require('chai');
var expect = chai.expect;
var h = require('snabbdom/h');
var _ = require('lodash');

chai.use(require('../index'));

describe('basics', function() {

  it('should assert a tree\'s tag', function() {
    expect(h('h1')).to.have.tag('h1');
    expect(h('h2.bob.bill')).to.have.tag('h2');
    expect(h('h3#R.x')).to.have.tag('h3');
    expect(h('h4#S.p.q.r.s')).to.have.tag('h4');
  });

  it('should assert a tree\'s class', function() {
    expect(h('div.foo')).to.have.class('foo');
    expect(h('div.bob.bill')).to.have.class('bill');
    expect(h('div#R.x')).to.have.class('x');
    expect(h('div#S.p.q.r.s')).to.have.class('r');
  });

  it('should assert a tree\'s classes', function() {
    expect(h('div.foo')).to.have.classes(['foo']);
    expect(h('div.bob.bill')).to.have.classes(['bill', 'bob']);
    expect(h('div#R.x')).to.have.classes(['x']);
    expect(h('div#S.p.q.r.s.t.u')).to.have.classes(['r', 's']);
  });

  it('should assert a tree\'s style', function() {
    var tree = h('div', { style: 'background: red; color: green;' }, 'foo');
    expect(tree).to.have.style({ background: 'red' });
    expect(tree).to.have.style({ color: 'green' });
  });

  it('should assert a tree\'s children count', function() {
    var tree = h('div', [ h('span'), h('span'), h('span') ]);
    expect(tree).to.have.children(3);
  });

  it('should assert a tree\'s text', function() {
    var tree = h('div', 'hello');
    expect(tree).to.have.text('hello');
  });

  it('should assert a tree\'s attribute', function() {
    var tree = h('div', { attrs: { src: 'http://foo.com/image.png' } });
    expect(tree).to.have.attribute('src', 'http://foo.com/image.png');
  });

});

