const fs = require('fs');

const args = process.argv.slice(2);
let inputFile, encoding;

args.forEach((arg, index) => {
  if (arg === '-i') {
    inputFile = args[index + 1];
  } else if (arg === '-e') {
    encoding = args[index + 1];
  }
});

if (!inputFile || !encoding) {
  console.log('Please provide input file and encoding options.');
} else {
  fs.readFile(inputFile, (err, data) => {
    if (err) {
      console.log('Error reading the input file.');
    } else {
      let content;

      if (encoding === 'utf-8') {
        content = data.toString('utf-8');
      } else if (encoding === 'base64') {
        content = data.toString('base64');
      } else {
        console.log('Unsupported encoding. Please use either utf-8 or base64.');
        process.exit(1);
      }

      console.log(content);
    }
  });
}
