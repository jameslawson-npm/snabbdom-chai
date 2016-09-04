var expect = require('chai').expect;

var subset = require('../../lib/arraySubset');

describe('subset', function() {

  it('should be that the empty list is a subset of all lists', function() {
    expect(subset([], ['x'])).to.be.true;
  });

  it('should be that a list is a subset of itself', function() {
    expect(subset(['x'], ['x'])).to.be.true;
  });

  it('should check one is a subset of three', function() {
    expect(subset(['x'], ['x', 'y', 'z'])).to.be.true;
  });

  it('should check two are a subset of three', function() {
    expect(subset(['x', 'y'], ['x', 'y', 'z'])).to.be.true;
  });

  it('should check three are a subset of three', function() {
    expect(subset(['x', 'y', 'z'], ['x', 'y', 'z'])).to.be.true;
  });

  it('should be that order doesn\'t matter', function() {
    expect(subset(['x', 'y', 'z'], ['z', 'y', 'x'])).to.be.true;
  });

  it('should check that one is not subset of three', function() {
    expect(subset(['NO'], ['a', 'b', 'c'])).to.be.false;
  });

});
