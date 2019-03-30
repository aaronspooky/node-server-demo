module.exports = function(data) {
  const res = this.res;
  res.status(201);
  return res.json(data);
}
