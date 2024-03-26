const nums = [1, 2, 3,4,0];

const isAvgWhole = (nums) => {
  const sum = nums.reduce((acc, val) => acc + val, 0);
  return sum % nums.length === 0;
};

console.log(isAvgWhole(nums));


