function getDecimals(amount) {
  const decimals = amount.toString().split('.')[1];
  return decimals ? parseInt(decimals, 10) : 0;
}

module.exports = {
  getDecimals,
};
