var fs = require('fs');

fs.unlink('./fs_files/empty.json', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
