const actionHandler = require("./actionHandler");

const [operation, ...stringNumbers] = process.argv.slice(2);
const numbers = stringNumbers.map((el) => Number(el));

actionHandler(operation, numbers);
