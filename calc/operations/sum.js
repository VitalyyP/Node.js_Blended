const sum = (operation, numbers) => {
  if (operation === "sum") {
    let result = numbers.reduce((acc, el) => acc + el, 0);
    console.log(result);
    return true;
  }
  return null;
};

module.exports = sum;
