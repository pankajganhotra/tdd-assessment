function add(numbers) {
  if (!numbers) return 0;

  const numberArray = numbers.split(",")

  return +numberArray[0] + +numberArray[1];
}

module.exports = add;
