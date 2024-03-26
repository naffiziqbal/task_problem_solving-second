const arr1 = [1, 31];

const arr2 = [1, 3, 3, 5, 5, 6, 7, 8, 9, 9];

const isSubSet = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) return false;
  }
  return true;
};

console.log(isSubSet(arr1, arr2));
