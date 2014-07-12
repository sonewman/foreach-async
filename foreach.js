module.exports = forEach

var toString = Object.prototype.toString
var isArray = Array.isArray || function isArray(obj) { 
  return toString.call(obj) === '[object Array]' 
}

function forEach(array, fn, done) {
  var l = isArray(array) ? array.length : 0
  var results = []

  ;(function next(array, i) {
    if (i === l) return done(results)
    var context = { done: function (r) {
      results.push(r)
      next(array, i + 1)
    }}
    fn.call(context, array[i], i, array)
  }(array, 0))
}

