var fs = require('fs');

fs.rename('./fs_files/empty.json', './transfer/renameEmpty.json', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
