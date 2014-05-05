# foreach-async

Array forEach which handles asynchronous operations in Node and the browser (using Browserify, etc.)

install:

```sh
$ npm i foreach-async
```

Usage:
```javascript
var forEach = require('foreach-async')

forEach(['a', 'b', 'c'], function (value, index, array) {
  
  // do something async
  something.async(function () {
    // signify done, passing optional result
    this.done(*result*)
  }.bind(this))

}, function (results) {
  // called after all array items have been
  // iterated, all values passed to done
  // are accessible in the 'results' array
})

```