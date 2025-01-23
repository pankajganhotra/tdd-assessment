function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterPart = numbers.slice(2, numbers.indexOf("\n"));
    delimiter = new RegExp(`[${delimiterPart.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&')}]`, 'g');
    numbers = numbers.slice(numbers.indexOf("\n") + 1);
  }

  const numberArray = numbers
    .split(delimiter)
    .map((num) => parseFloat(num.trim()));

  const negatives = numberArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + +num, 0);
}

module.exports = add;
