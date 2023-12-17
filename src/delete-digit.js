const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	n = String(n).split('');
	let maxNumber = 0;

	for (let i = 0; i < n.length; i++) {
		let currentArray = [...n];
		delete currentArray[i];
		let currentNumber = Number(currentArray.join(''));
		if (currentNumber > maxNumber) {
			maxNumber = currentNumber;
		}
	}

	return maxNumber;
}

module.exports = {
	deleteDigit
};

console.log(deleteDigit(1001))