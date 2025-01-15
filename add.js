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

  const negatives = numberArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + +num, 0);
}

module.exports = add;
