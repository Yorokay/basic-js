const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (typeof members !== 'object' || members === null) {
		return false;
	}
	let isArray = false;
	for (let i = 0; i < members.length; i++) {
		isArray = true;
	}
	if (!isArray) {
		return false;
	}
	members = members
		.filter(item => typeof item === 'string')
		.map(item => item.trim()[0].toUpperCase())
		.sort()
		.join('');
	return members;
}

module.exports = {
	createDreamTeam
};
