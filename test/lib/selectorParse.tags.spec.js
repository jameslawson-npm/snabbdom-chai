var expect = require('chai').expect;

var parse = require('../../lib/selectorParse').parseTag

describe('parsing snabbdom selectors - parsing tags', function() {

  it('should parse "div" as "div"', function() {
    expect(parse('div')).to.be.equal('div');
  });

  it('should parse "div.foo" as "div"', function() {
    expect(parse('div.foo')).to.be.equal('div');
  });

  it('should parse "div#foo" as "div"', function() {
    expect(parse('div#foo')).to.be.equal('div');
  });

  it('should parse "div#S.x.y.z" as "div"', function() {
    expect(parse('div#S.x.y.z')).to.be.equal('div');
  });

  it('should parse "DIV#S.x.y.z" as "div"', function() {
    expect(parse('DIV#S.x.y.z')).to.be.equal('div');
  });

});
