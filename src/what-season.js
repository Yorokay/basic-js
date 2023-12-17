const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	let invalidDate = new Error('Invalid date!');
	let stringedDate = String(date).slice(0, 24);
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	}
	try {
		date.setDate(date.getDate() + 0);
	}
	catch (err) {
		throw invalidDate;
	}
	let seasons = {
		'Dec': 'winter',
		'Jan': 'winter',
		'Feb': 'winter',
		'Mar': 'spring',
		'Apr': 'spring',
		'May': 'spring',
		'Jun': 'summer',
		'Jul': 'summer',
		'Aug': 'summer',
		'Sep': 'autumn',
		'Oct': 'autumn',
		'Nov': 'autumn'
	};
	let month = stringedDate.slice(4, 7);
	return seasons[month];
}

module.exports = {
	getSeason
};


