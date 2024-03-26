const arr = [1, 3, 3, 5, 5];

const filterDuplicate = (arr) => {
 return arr.filter((value, idx) => arr.indexOf(value) === idx);
};

console.log(filterDuplicate(arr))
