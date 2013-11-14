var Depinify = function() {}

var comments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var whitespace_and_comma = /([^\s,]+)/g;

Depinify.prototype.function_parameters = function(f) {
  var str = f.toString().replace(comments, '')
  var out = str.slice(str.indexOf('(')+1, str.indexOf(')')).match(whitespace_and_comma)
  if(out === null)
     out = []
  return out;
}

module.exports = Depinify;
