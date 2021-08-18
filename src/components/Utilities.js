const checkNum = (value) => {
  return isNaN(value) ? 0 : value;
};

const checkInfinity = (value) => {
  return isFinite(value) ? value : 0;
};

module.exports = {
  checkNum,
  checkInfinity,
};
