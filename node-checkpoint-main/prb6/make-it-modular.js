var readFile = require('./mymodule.js')

var file = process.argv[2]
var filtered = process.argv[3]

readFile(file, filtered, function(err, list) {
  if (err) {
      return console.log(err)
  }
  list.forEach(function (list) {
      console.log(list)
    })
  })