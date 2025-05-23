const fs = require('fs');
const path = require('path');

// Read the text file
const inputFile = path.join(__dirname, 'src', 'data', 'inspirational', 'philosophyquotes.txt');
const outputFile = path.join(__dirname, 'src', 'data', 'inspirational', 'philosophyQuotes.js');

// Read the file line by line
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the content by lines and filter out empty lines
  const quotes = data
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  // Format the quotes as a JavaScript array
  const jsContent = `export const philosophyQuotes = [\n${
    quotes.map(quote => `    "${quote.replace(/"/g, '\\"')}"`).join(',\n')
  }\n];\n`;

  // Write the JavaScript file
  fs.writeFile(outputFile, jsContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }
    console.log(`Successfully converted ${quotes.length} quotes to ${outputFile}`);
  });
});
