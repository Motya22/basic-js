const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const ONE_HOUR_IN_MINUTES = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((ONE_HOUR_IN_MINUTES / turnsSpeed) * turns);
  
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
