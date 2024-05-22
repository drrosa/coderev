const File = require('../../models/file');

async function create(req, res) {
  try {
    const file = await File.create(req.body);
    res.json(file);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
};
