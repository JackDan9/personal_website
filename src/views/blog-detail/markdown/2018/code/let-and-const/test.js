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


