function _max(nums) {
  let _len = nums.length;
  let _result = nums[0] + nums[1] + nums[2];

  let i = 1;
  while(i < _len - 2) {
    _result = Math.max(nums[i] + nums[i + 1] + nums[i + 2], _result);
    i++;
  }
  return _result;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  let _len = nums.length;
  return Math.max(nums[_len - 1] * nums[_len - 2] * nums[_len - 3], nums[0] * nums[1] * nums[_len - 1]);
};

