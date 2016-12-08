var fsp = require('fs-promise');
var _ = require('lodash');

var file1 = process.argv[2];
var file2 = process.argv[3];
var outputFile = process.argv[4];

fsp.readFile(file1)
  .then(function(buffer1) {
    var haiku1 = String(buffer1).split('\n');
    fsp.readFile(file2)
      .then(function(buffer2) {
        var haiku2 = String(buffer2).split('\n');
        var newHaiku = [];
        haiku1.forEach(function(line, i) {
          newHaiku.push(line);
          newHaiku.push(haiku2[i]);
        });
        newHaiku = newHaiku.join('\n');
        fsp.writeFile(outputFile, newHaiku)
          .then(function() {
            return;
          })
          .catch(function(err) {
            console.log('Something went wrong with the output file, because:', err.message);
          })
        return;
        })
      .catch(function(err) {
        console.log('Something went wrong at arg 3, because:', err.message);
      })
  })
  .catch(function(err) {
    console.log('Something went wrong because:', err.message);
  });




// fs.readFile(file1, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong because', err.message);
//     return;
//   }
//   var file1Lines = buffer.toString().split('\n');
//   fs.readFile(file2, function(err, buffer) {
//     if (err) {
//       console.log('Something went wrong because', err.message);
//       return;
//     }
//     var file2Lines = buffer.toString().split('\n');
//     var allLines = [];
//     file1Lines.forEach(function(line, idx) {
//       allLines.push(line);
//       allLines.push(file2Lines[idx]);
//     });
//     fs.writeFile(outputFile, allLines.join('\n'), function(err) {
//       if (err) {
//         console.log('Something went wrong because', err.message);
//         return;
//       }
//     });
//   });
// });
