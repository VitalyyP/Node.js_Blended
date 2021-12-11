const div = (operation, numbers) => {
  if (operation === "div") {
    let result = numbers.reduce((acc, el) => acc / el);
    console.log(result);
    return true;
  }
  return null;
};

module.exports = div;
