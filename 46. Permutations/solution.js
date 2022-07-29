/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, arr = [], ans = []) {
  if (!nums.length) ans.push([...arr]);

  for (let i = 0; i < nums.length; i++) {
    let newNums = [...nums];
    arr.push(newNums.splice(i, 1)[0]);
    permute(newNums, arr, ans);
    arr.pop();
  }
  return ans;
};
