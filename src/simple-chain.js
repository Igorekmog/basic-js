const chainMaker = {
  chain: new Array(),
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position !== "number" || position>this.chain.length || position<=0)
    {this.chain = new Array();
    throw new Error();
        } 
    else 
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    for(let i=0;i<this.chain.length;i++){
      this.chain.splice(i, 1, `( ${this.chain[i]} )`)
    }
    let result = this.chain.join('~~');
    this.chain = new Array();
    return result;
  }
};

module.exports = chainMaker;
