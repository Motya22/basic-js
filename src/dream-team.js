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
  if (!Array.isArray(members) || !members.length) {
  	return false;
  }
  
	const filteredMembers = members.filter((member) => typeof member === 'string');
  const mappedMembers = filteredMembers.map((member) => member.trimStart()[0].toUpperCase());
  const sortedMembers = mappedMembers.sort((a, b) => a > b ? 1 : -1);
  
  return sortedMembers.join('');
}

module.exports = {
  createDreamTeam
};
