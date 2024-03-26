const filterString = (arr) => {
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }
  return numbers
};

const arr = [1, 2, "aasf", "1", "123", 123];

const res = filterString(arr);
console.log(res)
