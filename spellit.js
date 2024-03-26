const spellIt = (word) => {
  const result = [];
  for (let i = 1; i <= word.length; i++) {
    result.push(word.slice(0, i));
  }
  return result
};

console.log(spellIt('Nafiz'))
