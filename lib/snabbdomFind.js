var parseClassNames = require('./selectorParse').parseClassNames;
var filter = require('lodash.filter');
var first = require('lodash.first');
var includes = require('lodash.includes');
var map = require('lodash.map');

function find(root, klass) {
  var rootClassNames = parseClassNames(root.sel || '');
  var found = includes(rootClassNames, klass);
  if (found) return root;

  return first(
    filter(
      map((root.children || []), function(child) { return find(child, klass); }),
      function(x) { return x !== undefined }
    )
  );
}

module.exports = find;
