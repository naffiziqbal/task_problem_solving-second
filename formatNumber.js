const formatNumber = (nums) => {
  if (nums.length !== 10) return "wrong Number";
  return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
};

console.log(formatNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
