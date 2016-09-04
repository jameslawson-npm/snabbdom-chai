var expect = require('chai').expect;

var parse = require('../../lib/selectorParse').parseClassNames;

describe('parsing snabbdom selectors - parsing classes', function() {

  it('should parse "div" as []', function() {
    expect(parse('div')).to.deep.equal([]);
  });

  it('should parse "div.foo" as ["foo"]', function() {
    expect(parse('div.foo')).to.deep.equal(['foo']);
  });

  it('should parse "div.x.y.z" as ["x", "y", "z"]', function() {
    expect(parse('div.x.y.z')).to.deep.equal(['x', 'y', 'z']);
  });

  it('should parse "div#S.p.q.r.s" as ["p", "q", "r", "s"]', function() {
    expect(parse('div#S.p.q.r.s')).to.deep.equal(['p', 'q', 'r', 's']);
  });

  it('should parse "div.aBcDeF" as ["aBcDeF"]', function() {
    expect(parse('div.aBcDeF')).to.deep.equal(['aBcDeF']);
  });

});
