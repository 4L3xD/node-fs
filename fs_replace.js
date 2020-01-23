var fs = require('fs');

fs.writeFile('./fs_files/write.json', 'Hello modify content!', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});