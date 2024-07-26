const fs = require('fs');
const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

function modifyContent(content) {
  // Replacing 'Hello' with 'World' 
  return content.replace('Hello', 'World');
}
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Modified content
  const modifiedContent = modifyContent(data);
  // Write the modified content to a new file
  fs.writeFile(outputFilePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully!');
    }
  });
});
