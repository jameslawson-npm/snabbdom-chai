var every = require('lodash.every');
var some = require('lodash.some');
var parseTag = require('./selectorParse').parseTag;

/**
 * @description Checks if a snabbdom tree has a matching node
 * @param {Object} root A snabbdom tree built using the snabbdom/h module
 * @param {Object} filter Object contains keys "tag", "classes", "children", "styles", "text"
 * @return {Boolean} Returns true iff a depth-first-search of `root` has a
 * subtree matching criteria specified by `filter`
 */
function contains(root, filter) {
    var tree = root;
    var sel = root.sel;

    var rootTag = parseTag(sel);
    var tag = filter.tag;
    var classes = filter.classes;
    var children = filter.children;
    var styles = filter.styles;
    var text = filter.text;

    var matchingTag = (tag) ? (tag === rootTag) : true;
    var found = every([matchingTag]);

    if (found) {
        return true
    } else {
        return some(root.children, function(child) {
            return contains(child, filter);
        });
    }

}

module.exports = contains;
