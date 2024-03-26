const secretName = (names) => {
  const firstLetters = [];
  names.sort();
  for (name of names) {
    firstLetters.push(name.slice(0, 1));
  }

  return firstLetters.reduce((accum, val) => accum + val);
};

console.log(secretName(["Nafiz", "Abir", "Fahim", "Iqbal", "Zunayed"]));
