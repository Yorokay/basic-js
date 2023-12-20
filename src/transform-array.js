const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

	let newArr = [];
	let arrCopy = [arr];

	try {
		arrCopy[0].join('');
	} catch (err) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	if (arr[0] === undefined) {
		return arr;
	}

	for (let i = 0; i < arr.length; i++) {

		if (i === 0 && (arr[i] === '--discard-prev' || arr[i] === '--double-prev')) {
			continue;
		}
		else if (i === arr.length - 1 && (arr[i] === '--double-next' || arr[i] === '--discard-next')) {
			continue;
		}


		if (arr[i] === '--discard-next') {
			if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
				i += 2;
			}
			else {
				i++;
			}
		}
		else if (arr[i] === '--double-next') {
			newArr.push(arr[i + 1]);
		}
		else if (arr[i] === '--discard-prev') {
			newArr[i - 1] = null;
		}
		else if (arr[i] === '--double-prev') {
			newArr.push(arr[i - 1]);
		}
		else {
			newArr.push(arr[i]);
		}
	}

	return newArr.filter(item => item !== null);

}

module.exports = {
	transform
};

// console.log(transform(['--double-next', { foo: 'bar' }]));



