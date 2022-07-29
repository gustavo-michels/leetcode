function searchInsert(nums, target) {
  const idx = nums.indexOf(target), n = nums.length;

  if (idx !== -1)
      return idx;

  if (nums[0] > target)
      return 0;

  if (nums.at(-1) < target)
      return n;

  for (let i = 1; i < n; i++)
      if (nums[i - 1] < target && nums[i] > target)
          return i;
}

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
