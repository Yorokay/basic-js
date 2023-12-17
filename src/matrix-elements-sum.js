const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		let currentRow = matrix[i];
		let preventRow = matrix[i - 1];
		newMatrix.push(currentRow.map((item, index) => {
			if (preventRow === undefined) return item;
			else {
				return preventRow[index] === 0 ? 0 : item;
			}
		}));
	}
	newMatrix = newMatrix
		.flat(1)
		.reduce((acc, item) => acc += item, 0);
	return newMatrix;
}

module.exports = {
	getMatrixElementsSum
};

const matrix = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3]
]