var fs = require('fs');

fs.open('./fs_files/empty.json', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
