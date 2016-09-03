var every = require('lodash.every');
var keys  = require('lodash.keys');

/**
 * @description Determines whether obj1 is a shallow key-value subset of obj2
 * that is, determine that for all keys k in obj1, obj1[k] = obj2[k]
 * Examples:
 *   - { x: 1 } is a subset of { x: 1, y: 2 }
 *   - { x: 'a', y: 'b' } is a subset of { x: 'a', y: 'b', z: 'c' }
 *   - {} is (vacuously) a subset of all subsets
 * @param {Object} obj1 the first object (obj1)
 * @param {Object} obj2 the second object (obj2)
 */
function keyValSubset(obj1, obj2) {
  return every(keys(obj1), (function(k) {
    return obj2[k] === obj1[k];
  }));
}

module.exports = keyValSubset;
