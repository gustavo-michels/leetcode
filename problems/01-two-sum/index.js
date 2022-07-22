
function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var y = 0; y < nums.length; y++) {
      if (i != y) {
        if (nums[i] + nums[y] == target) {
          return [i, y]
        }
      }
    }
  }
  return null
};

function twoSum2(nums, target) {
  let hashTable = {}

  for(let i = 0; nums.length; i++) {
    let complement = target - nums[i]

    if (hashTable.hasOwnProperty(complement)) {
      return [hashTable[complement], i]
    }

    hashTable[nums[i]] = i
  }
  return null
}

const nums = [2, 7, 11, 15]
const target = 9

console.log('Força bruta => ' + twoSum(nums, target))
console.log('Com HashMap => ' + twoSum2(nums, target))
