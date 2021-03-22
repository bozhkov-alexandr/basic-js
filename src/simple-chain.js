const CustomError = require("../extensions/custom-error");

const chainMaker = {
  // Create an object property - with value == []
  chain: [],

  getLength() {

    return this.chain.length;
  },
  // Inspect for correct input
  addLink(value) {
    if (value === undefined) {
      value = ' ';
    }
    this.chain.push(String(value));
    return this;
  },
  // Inspection for item removing and cleaning an object's property with value == []
  removeLink(position) {
    if (position <= 0 || position > (this.getLength() - 1) || typeof position != "number") {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  // Convert object's value == [] into a string
  finishChain() {
    let output = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return output;
  }

};

module.exports = chainMaker;
