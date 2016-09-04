var every = require('lodash.every');
var some = require('lodash.some');

var arraySubset = require('./arraySubset');
var isUndefined = require('lodash.isundefined');
var objectSubset = require('./objectSubset');
var parseTag = require('./selectorParse').parseTag;
var parseClassNames = require('./selectorParse').parseClassNames;
var styleParse = require('./styleParse');

/**
 * @description Checks if a snabbdom tree has a matching node
 * @param {Object} root A snabbdom tree built using the snabbdom/h module
 * @param {Object} filter Object contains keys "tag", "classes", "children", "style", "text"
 * @return {Boolean} Returns true iff `root` has a subtree matching
 * criteria specified by `filter`
 */
function contains(root, filter) {
  var tree = root;
  var sel = root.sel;

  var children = filter.children;
  var classNames = filter.classNames;
  var style = filter.style;
  var tag = filter.tag;
  var text = filter.text;

  var rootChildren = (tree.children && tree.children.length) || 0;
  var rootClassNames = parseClassNames(sel);
  var rootStyle = styleParse(tree.data.style);
  var rootTag = parseTag(sel);
  var rootText = (tree.text) || '';

  var matchingChildren = (!isUndefined(children)) ? (children === rootChildren) : true;
  var matchingClassNames = (classNames) ? arraySubset(classNames, rootClassNames) : true;
  var matchingTag = (tag) ? (tag === rootTag) : true;
  var matchingStyle = (style) ? objectSubset(style, rootStyle) : true;
  var matchingText = (text) ? (text === rootText) : true;

  var found = every([
    matchingChildren,
    matchingClassNames,
    matchingStyle,
    matchingTag,
    matchingText
  ]);

  if (found) {
    return true
  } else {
    return some(root.children, function(child) {
      return contains(child, filter);
    });
  }

}

module.exports = contains;
