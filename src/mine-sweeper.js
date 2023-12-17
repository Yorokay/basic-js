const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let newMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		let currentRow = matrix[i];
		console.log(i);
		console.log(currentRow);
		// matrix[i] = currentRow.map((item, index) => index)
		if (i === 0) {
			let nextRow = matrix[i + 1];
			newMatrix.push(currentRow.map((item, index) => {
				item = 0;
				if (index === 0) {
					// for (let j = 1; j <= 3; j++) {
					// 	if (currentRow[index + 1] === true || nextRow[index] === true ||
					// 		nextRow[index + 1] === true) {

					// 	}
					// }
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index + 1] === true) {
						item += 1;
					}
				}

				else if (index === currentRow.length - 1) {
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index - 1] === true) {
						item += 1;
					}
				}
				else {
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index + 1] === true) {
						item += 1;
					}
				}
				return item;
			}));
		}
		else if (i === matrix.length - 1) {
			let preventRow = matrix[i - 1];
			newMatrix.push(currentRow.map((item, index) => {
				item = 0;
				if (index === 0) {
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index + 1] === true) {
						item += 1;
					}
				}

				else if (index === currentRow.length - 1) {
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index - 1] === true) {
						item += 1;
					}
				}
				else {
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index - 1] === true) {
						item += 1;
					}
					if (preventRow[index + 1] === true) {
						item += 1;
					}
				}
				return item;
			}));
		}
		else {
			let nextRow = matrix[i + 1];
			let preventRow = matrix[i - 1];
			newMatrix.push(currentRow.map((item, index) => {
				item = 0;
				if (index === 0) {
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index + 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index + 1] === true) {
						item += 1;
					}
				}

				else if (index === currentRow.length - 1) {
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index - 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index - 1] === true) {
						item += 1;
					}
				}
				else {
					if (currentRow[index + 1] === true) {
						item += 1;
					}
					if (currentRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index] === true) {
						item += 1;
					}
					if (nextRow[index - 1] === true) {
						item += 1;
					}
					if (nextRow[index + 1] === true) {
						item += 1;
					}
					if (preventRow[index] === true) {
						item += 1;
					}
					if (preventRow[index - 1] === true) {
						item += 1;
					}
					if (preventRow[index + 1] === true) {
						item += 1;
					}
				}
				return item;
			}));
		}
	}
	return newMatrix;
};

module.exports = {
	minesweeper
};

