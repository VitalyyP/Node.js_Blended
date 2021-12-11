// console.log(process.argv);

// sum +
// sub -
// mult *
// div /

const [operation, ...stringNumbers] = process.argv.slice(2);
const numbers = stringNumbers.map((el) => Number(el));

// let result;
// if (operation === "sum") {
//   result = numbers.reduce((acc, el) => acc + el, 0);
// }

// if (operation === "sub") {
//   result = numbers.reduce((acc, el) => acc - el);
// }

// if (operation === "mult") {
//   result = numbers.reduce((acc, el) => acc * el);
// }

// if (operation === "div") {
//   result = numbers.reduce((acc, el) => acc / el);
// }
const sum = (operation, numbers) => {
  if (operation === "sum") {
    let result = numbers.reduce((acc, el) => acc + el, 0);
    console.log(result);
    return true;
  }
  return null;
};

const sub = (operation, numbers) => {
  if (operation === "sub") {
    let result = numbers.reduce((acc, el) => acc - el);
    console.log(result);
    return true;
  }
  return null;
};

const mult = (operation, numbers) => {
  if (operation === "mult") {
    let result = numbers.reduce((acc, el) => acc * el);
    console.log(result);
    return true;
  }
  return null;
};

const div = (operation, numbers) => {
  if (operation === "div") {
    let result = numbers.reduce((acc, el) => acc / el);
    console.log(result);
    return true;
  }
  return null;
};

// console.log(result);

switch (operation) {
  case "sum":
    sum(operation, numbers);
    break;
  case "sub":
    sub(operation, numbers);
    break;
  case "mult":
    mult(operation, numbers);
    break;
  case "div":
    div(operation, numbers);
    break;
  default:
    console.log("Unknown operation type");
}
