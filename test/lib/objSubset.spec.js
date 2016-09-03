var expect = require('chai').expect;

var objSubset = require('../../lib/objSubset');

describe('object subsets', function() {

  it('should be that an empty object {} is a subset of all objects', function() {
    expect(objSubset({}, { x: 0 })).to.be.true;
  });

  it('should be that an object {} is a subset of itself', function() {
    expect(objSubset({ x: 0 }, { x: 0 })).to.be.true;
  });

  it('should check one is a subset of three', function() {
    expect(objSubset({ x: 0 }, { x: 0, y: 1, z: 2})).to.be.true;
  });

  it('should check two are a subset of three', function() {
    expect(objSubset({ x: 0, y: 1 }, { x: 0, y: 1, z: 2})).to.be.true;
  });

  it('should check three are a subset of three', function() {
    expect(objSubset({ x: 0, y: 1, z: 2 }, { x: 0, y: 1, z: 2})).to.be.true;
  });

  it('should check that one is not a subset of three', function() {
    expect(objSubset({ x: -1000 }, { x: 0, y: 1, z: 2})).to.be.false;
    expect(objSubset({ xxx: 0 }, { x: 0, y: 1, z: 2})).to.be.false;
  });

});
