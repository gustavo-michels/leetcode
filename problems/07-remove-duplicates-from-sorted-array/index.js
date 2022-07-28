function removeDuplicates(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i+1]) {
      delete nums[i];
    } else {
      count++;
    }
  }

  nums.sort((a, b) => a - b);
  nums.length = count;

  return count;
}

nums1 = [1,1,2]
nums2 = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums1))
console.log(removeDuplicates(nums2))
