function add(numbers) {
  if (!numbers) return 0;

  const numberArray = numbers.split(/,|\n/).map(num => parseFloat(num.trim()));

  return numberArray.reduce((sum, num) => sum + +num, 0);
}

module.exports = add;
