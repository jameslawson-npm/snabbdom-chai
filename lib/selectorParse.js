function parseTag(sel) {
  var NAME_THEN_DOT_OR_HASH = /([A-Za-z0-9]*)([.#])?/;
  var matches = sel.match(NAME_THEN_DOT_OR_HASH);
  var name = (matches && matches[1]) || '';

  return name.toLowerCase();
}

function parseClassNames(sel) {
  var hashLookup = sel.indexOf('#');
  var firstDotIndex = sel.indexOf('.', hashLookup);

  // store in `classNames` the class names in the form of: 'c1.c2.c3'
  // where each class name, ci, is seperated by a dot in the string
  // then use `split` to get an array: ['c1', 'c2', 'c3']
  var classNamesFrom  = (firstDotIndex >= 0) ? firstDotIndex+1 : sel.length;
  var classNamesTo = sel.length;
  var classNames = sel.slice(classNamesFrom, classNamesTo);

  if (classNames.length === 0) {
    return [];
  } else {
    return classNames.split('.');
  }
}


module.exports = {
  parseTag: parseTag,
  parseClassNames: parseClassNames
};
