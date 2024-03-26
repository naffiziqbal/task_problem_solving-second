const arr = ["may", "april", "september", "august"];

const sortString = (arr) => {
  const sortedArr = arr.sort((a, b) => a.length - b.length);
  return sortedArr;
};

const res = sortString(arr);
console.log(res);
