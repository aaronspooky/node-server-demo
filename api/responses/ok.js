module.exports = function(data) {
  const res = this.res;
  res.status(200);
  return res.json(data);
}
