const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

	calculateDepth(arr) {

		let arrCopy = [arr];
		try {
			arrCopy[0].join('');
		} catch (err) {
			return 0;
		}

		let result = 1;
		let maxDepth = 1;
		if (arr.length === 0) {
			return result;
		}
		else {
			for (let i = 0; i < arr.length; i++) {
				result = 1;
				let arrayFlag = true;
				let currentArrayCopy = [arr[i]];

				try {
					currentArrayCopy[0].join('');
				} catch (err) {
					arrayFlag = false;
				}

				if (arrayFlag) {
					result += this.calculateDepth(arr[i]);
				}

				if (result > maxDepth) {
					maxDepth = result;
				}
			}
		}

		return maxDepth;
	}
};

module.exports = {
	DepthCalculator
};


