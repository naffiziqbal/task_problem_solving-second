/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid. */

const findNumber = (nums) => {
  const result = [];
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);
  result.push(minNum, maxNum);
  return result;
};

const nums = [23, 23, 432, 23, 5, 1];
const res = findNumber(nums);

