module.exports = {
  get: async function(req, res) {
    const users = await User.findAll({});
    return res.ok(users);
  },
  create: async function(req, res) {
    const users = await User.create(req.body);
    return res.created(users);
  }
}
