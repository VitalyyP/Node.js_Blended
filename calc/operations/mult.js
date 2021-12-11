const mult = (operation, numbers) => {
  if (operation === "mult") {
    let result = numbers.reduce((acc, el) => acc * el);
    console.log(result);
    return true;
  }
  return null;
};

module.exports = mult;
