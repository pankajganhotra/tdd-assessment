function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  
  if (numbers.startsWith("//")) {
    delimiter = numbers.slice(2, numbers.indexOf("\n"));
    numbers = numbers.slice(numbers.indexOf("\n") + 1);
  }

  const numberArray = numbers
    .split(new RegExp(delimiter))
    .map((num) => parseFloat(num.trim()));

  return numberArray.reduce((sum, num) => sum + +num, 0);
}

module.exports = add;
