const express = require('express');

const router = express.Router();
const filesCtrl = require('../../controllers/api/files');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST api/files
router.post('/', ensureLoggedIn, filesCtrl.create);

module.exports = router;
