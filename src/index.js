module.exports = function check(str, bracketsConfig) {
  let arr = [];
  
  if (str.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ( (arr[arr.length - 1] ===  bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]) ) {
        arr.pop(arr.length - 1);
      } else if(str[i] === bracketsConfig[j][0]) {
        arr.push(str[i]);
      }
    }    
  }
  return arr.length === 0;
}
