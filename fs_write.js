var fs = require('fs');

fs.writeFile('./fs_files/write.json', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});