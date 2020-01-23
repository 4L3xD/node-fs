var fs = require('fs');

fs.appendFile('./fs_files/append.json', 0 + '+', function (err) {
  if (err) throw err;
  console.log('Updated!');
});