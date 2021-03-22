const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error();
  const resultArr = arr.concat()
  arr.forEach((item, index) => {
    switch(item) {
      case '--discard-next': if ( index !== resultArr.length-1 ) resultArr[index+1] = '--discard-next'; break;
      case '--discard-prev': if ( index !== 0 ) resultArr[index-1] = '--discard-prev'; break;
      case '--double-next': if ( index !== resultArr.length-1 ) resultArr[index] = resultArr[index+1]; break;
      case '--double-prev': if ( index !== 0 ) resultArr[index] = resultArr[index-1]; break;
    }
  })
  return resultArr.filter(it => (it !== '--discard-next' && it !== '--discard-prev' && it !== '--double-next' && it !== '--double-prev') );
};
