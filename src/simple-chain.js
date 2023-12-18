const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: '',

	getLength() {
		let stringedValue = this.chain.split('~~');
		return stringedValue.length;
	},

	addLink(value) {
		let stringedValue = String(value);

		if (this.chain.length < 1) {
			if (value !== undefined) {
				this.chain = `( ${stringedValue} )`;
			} else {
				this.chain = `(  )`;
			}
		}
		else {
			if (value !== undefined) {
				this.chain += `~~( ${stringedValue} )`;
			} else {
				this.chain += `~~(  )`;
			}
		}

		return this;
	},

	removeLink(position) {
		let chainArray = this.chain.split('~~');

		if (position < 1 || position % 1 !== 0 || position > chainArray.length) {
			this.chain = '';
			throw new Error("You can't remove incorrect link!");
		}

		chainArray[position - 1] = null;
		this.chain = chainArray
			.filter(item => item !== null)
			.join('~~');

		return this;

	},

	reverseChain() {
		let chainArray = this.chain.split('~~');
		this.chain = chainArray.reverse().join('~~');

		return this;
	},

	finishChain() {
		let resultChain = this.chain;
		this.chain = '';
		return resultChain;
	}
};

module.exports = {
	chainMaker
};

// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain()
// console.log(chainMaker.getLength())
// chainMaker.addLink(1).addLink(2).addLink(3)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
// console.log(chainMaker.chain);
// console.log()
// let str = 'lolkabulka';
// console.log(str.split('').reverse())
// chainMaker.reverseChain();

// let arr = [1, 3, 4, 5];
// console.log(3 < arr.length);