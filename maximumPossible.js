const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maximumPossible = (arr) => {
  const number = arr.sort((a, b) => b - a).slice(0, 5);
  return (total = number.reduce((accum, value) => accum + value, 0));

};

console.log(maximumPossible(arr));
