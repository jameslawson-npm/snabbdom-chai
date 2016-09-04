var expect = require('chai').expect;

var styleParse = require('../../lib/styleParse');

describe('parsing style attributes', function() {

  it('should parse undefined as an empty object', function() {
    expect(styleParse(undefined)).to.be.deep.equal({});
  });

  it('should parse "" as an empty object', function() {
    expect(styleParse('')).to.be.deep.equal({});
  });

  it('should parse a style with one declaration', function() {
    expect(styleParse('color: red')).to.be.deep.equal({ color: 'red' });
  });

  it('should parse a style with two declarations', function() {
    expect(styleParse('color: red; dir: ltr')).to.be.deep.equal({
      color: 'red',
      dir: 'ltr'
    });
  });

  it('should parse a style with no whitespace', function() {
    expect(styleParse('color:red;dir:ltr;width:10px')).to.be.deep.equal({
      color: 'red',
      dir: 'ltr',
      width: '10px',
    });
  });

});
