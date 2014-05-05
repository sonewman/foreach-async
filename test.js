var test = require('tape')
var forEach = require('./')

test('test array for each with async ops', function (t) {
  var a = [4, 3, 2, 1, 0]
  var b = ['a', 'b', 'c', 'd', 'e']
  
  forEach(a, function (v, i) {
    var self = this

    setTimeout(function () {
      self.done(b[v])
    }, 0)

  }, function (results) {
    var exp = b.length - 1
    for (var i = 0; i < results.length; i++)
      t.equals(results[i], b[exp - i], 'results are as expected')
    t.end()
  })
})
