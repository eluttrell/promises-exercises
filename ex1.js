var fsp = require('fs-promise');

var filename = process.argv[2];
fsp.readFile(filename)
  .then(function(buffer) {
    console.log('Contents of file: ', String(buffer).toUpperCase());
  })
  .catch(function(err) {
    console.log('Now you done fucked up:\n', err.message);
  });
