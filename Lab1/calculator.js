const args = process.argv.slice(2);
let operation, firstValue, secondValue;

args.forEach((arg, index) => {
  if (arg === '-o') {
    operation = args[index + 1];
  } else if (index === args.length - 2) {
    firstValue = parseFloat(arg);
  } else if (index === args.length - 1) {
    secondValue = parseFloat(arg);
  }
});

if (!operation || isNaN(firstValue) || isNaN(secondValue)) {
  console.log('Please provide valid operation, first value, and second value.');
} else {
  let result;
  
  switch (operation) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      result = firstValue / secondValue;
      break;
    case '**':
      result = Math.pow(firstValue, secondValue);
      break;
    default:
      console.log('Unsupported operation. Please use one of the following: +, -, *, /, **');
      process.exit(1);
  }
  
  console.log(`${firstValue} ${operation} ${secondValue} = ${result}`);
}
