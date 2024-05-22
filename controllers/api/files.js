const File = require('../../models/file');

async function create(req, res) {
  try {
    const file = await File.create(req.body);
    res.json(file);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    // eslint-disable-next-line no-underscore-dangle
    const files = await File.find({ user: req.user._id }).select('-user -__v');
    res.json(files);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  index,
};
