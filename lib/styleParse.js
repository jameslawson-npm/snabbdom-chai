var reduce = require('lodash.reduce')

// converts a css style string to an object
function styleParse(input) {
  if (!input) return {};
  var properties = input.split(';');

  return reduce(properties, function(parsed, property) {
    var FIRST_COLON = /:(.+)/;
    var split = property.split(FIRST_COLON);

    if (split.length > 1) {
      var name = split[0].trim();
      var value = split[1].trim();
      parsed[name] = value;
      return parsed;
    } else {
      return parsed;
    }
  }, {});
}

module.exports = styleParse;
