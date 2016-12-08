var fsp = require('fs-promise');

var filename = process.argv[2];
var outputFilename = process.argv[3];

fsp.readFile(filename)
  .then(function(buffer) {
    content = String(buffer).toUpperCase();
    fsp.writeFile(outputFilename, content);
  })
  .catch(function(err) {
    console.log('Something fuuuud up:', err.message);
  })


// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//   var content = buffer.toString();
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });
