const fs = require('fs')

const writeFileASync = new Uint8Array(Buffer.from('Hello Node'));
fs.writeFile('message.txt', writeFileASync, (err) => {
  if (err) throw err;
  console.log('Done!');
});

