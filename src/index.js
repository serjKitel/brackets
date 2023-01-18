module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = [];
  let copyStr = str;
  let strLength = str.length;

  if (str.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < bracketsConfig.length; i++) {
      arr[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
    }
    for (let i = 0; i < copyStr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        str = str.split(arr[j]).join('');
        strLength = str.length;
      }
    }
    if (strLength === 0) {
      return true;
    }
  }
  return false;
}
