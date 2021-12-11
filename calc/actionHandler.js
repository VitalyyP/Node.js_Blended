const { sum, sub, mult, div } = require("./operations");

const actionHandler = (operation, numbers) => {
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
};

module.exports = actionHandler;
