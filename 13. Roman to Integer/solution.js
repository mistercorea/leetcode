// hardcode roman number
convertSingleRomToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * It will convert roman number to integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  Array.from(s).forEach((letter, i) => {
    // if next number is larger then it will subtract from the total number
    if (convertSingleRomToInt[letter] < convertSingleRomToInt[s[i + 1]]) {
      ans -= convertSingleRomToInt[letter];
    } else {
      ans += convertSingleRomToInt[letter];
    }
  });
  return ans;
};
