const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth=1, levels=[]) {
    levels.push(depth);
    arr.forEach(item => {if (Array.isArray(item)) this.calculateDepth(item, depth+1, levels)});

    return Math.max(...levels);
    }
};