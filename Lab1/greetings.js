const args = process.argv.slice(2);
let clientName, country, age;

args.forEach((arg, index) => {
  if (arg === '-n') {
    clientName = args[index + 1];
  } else if (arg === '-c') {
    country = args[index + 1];
  } else if (arg === '-a') {
    age = args[index + 1];
  }
});

if (!clientName || !country || !age) {
  console.log('Please provide clientName, country, and age arguments.');
} else {
  console.log(`Hello, ${clientName} ${age} from ${country}!`);
}
