var includes = require('lodash.includes');

function builder(chai, utils) {
  function klass(name) {
    var tree = this._obj;
    var sel = tree.sel;

    var hashLookup = sel.indexOf('#');
    var firstDotIndex = sel.indexOf('.', hashLookup);

    // store in `classNames` the class names in the form of: 'c1.c2.c3'
    // where each class name, ci, is seperated by a dot in the string
    // then use `split` to get an array: ['c1', 'c2', 'c3']
    var classNamesFrom  = (firstDotIndex > 0) ? firstDotIndex+1 : sel.length;
    var classNamesTo = sel.length;
    var classNames = sel.slice(classNamesFrom, classNamesTo).split('.');

    var passes = includes(classNames, name);
    var ERR_MSG = 'expected #{this} to have class #{exp}';
    var NOT_MSG = 'expected #{this} to not have a class #{exp}';
    this.assert(passes, ERR_MSG, NOT_MSG, name);
  }

  return klass;
}

module.exports = builder;
