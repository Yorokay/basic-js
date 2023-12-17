const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === -1) continue;
		let min = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] === -1) continue;
			if (arr[j] < min) {
				let current = arr[i];
				min = arr[j];
				arr[j] = current;
				arr[i] = min;
			}
		}
	}
	return arr;
}

module.exports = {
	sortByHeight
};

