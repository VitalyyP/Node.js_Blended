const sub = (operation, numbers) => {
  if (operation === "sub") {
    let result = numbers.reduce((acc, el) => acc - el);
    console.log(result);
    return true;
  }
  return null;
};

module.exports = sub;
