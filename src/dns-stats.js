const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let dnsStats = {};
	domains = domains.map(item => item.split('.'));
	for (let i = 0; i < domains.length; i++) {
		let domain = '';
		for (let j = domains[i].length - 1; j >= 0; j--) {
			domain += `.${domains[i][j]}`;
			if (dnsStats[domain] === undefined) {
				dnsStats[domain] = 1;
			}
			else {
				dnsStats[domain] += 1;
			}
		}
	}
	return dnsStats;
}

module.exports = {
	getDNSStats
};
