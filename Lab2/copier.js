const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
let inputFile, outputFile;

// Extract values from command line arguments
args.forEach((arg, index) => {
  if (arg === '-i') {
    inputFile = args[index + 1];
  } else if (arg === '-o') {
    outputFile = args[index + 1];
  }
});

// Check if required arguments are provided
if (!inputFile || !outputFile) {
  console.log('Please provide input file and output file options.');
} else {
  // Check if the input file exists
  fs.access(inputFile, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('Input file does not exist.');
    } else {
      // Create a readable stream from the input file
      const readable = fs.createReadStream(inputFile);

      // Extract the file extension from the input file
      const ext = path.extname(inputFile);

      // Append the file extension to the output file name if it's not present
      const outputFileName = path.extname(outputFile) ? outputFile : outputFile + ext;

      // Create a writable stream for the output file
      const writable = fs.createWriteStream(outputFileName);

      // Perform the copying
      readable.pipe(writable);

      console.log(`Copied ${inputFile} to ${outputFileName}`);
    }
  });
}
