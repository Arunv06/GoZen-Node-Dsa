const fs = require('fs');

const filePath = 'myFile.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log(data); // Output the file content
  }
});
