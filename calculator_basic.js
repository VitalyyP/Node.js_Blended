// console.log(process.argv);

// sum +
// sub -
// mult *
// div /

const [operation, ...stringNumbers] = process.argv.slice(2);
const numbers = stringNumbers.map((el) => Number(el));

let result;
if (operation === "sum") {
  result = numbers.reduce((acc, el) => acc + el, 0);
}

if (operation === "sub") {
  result = numbers.reduce((acc, el) => acc - el);
}

if (operation === "mult") {
  result = numbers.reduce((acc, el) => acc * el);
}

if (operation === "div") {
  result = numbers.reduce((acc, el) => acc / el);
}

// console.log(result);

switch (operation) {
  case "sum":
    sum(operation, numbers);
    break;
  case "sub":
    sub(operation, numbers);
    break;
  case "sum":
    mult(operation, numbers);
    break;
  case "sum":
    div(operation, numbers);
    break;
  default:
    console.log("Unknown operation type");
}
