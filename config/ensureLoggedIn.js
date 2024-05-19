// config/ensureLoggedIn.js

module.exports = (req, res, next) => {
  // Status code of 401 is Unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  // A okay
  return next();
};
