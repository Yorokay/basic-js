const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	for (let i = 0; i < n.length; i++) {

		if ((i + 1) % 3 === 0 && i !== 0) {

			if (n[i] === '-') continue;
			return false;
		}
		else {

			if ((n.charCodeAt(i) >= 48 && n.charCodeAt(i) <= 57) || (n.charCodeAt(i) >= 65 && n.charCodeAt(i) <= 70)) {
				continue;
			}
			else {
				return false;
			};
		}
	}
	return true;
}
module.exports = {
	isMAC48Address
};
