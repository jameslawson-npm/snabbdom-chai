var includes = require('lodash.includes');
var every = require('lodash.every');

// return true iff list1 is a "subset" of list2
// precisely: for all x in U (x in list1 implies x in list2)
function subset(list1, list2) {
    return every(list1, function(x1) {
        return includes(list2, x1);
    });
}

module.exports = subset;
