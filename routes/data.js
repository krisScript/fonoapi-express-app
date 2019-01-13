const path = require('path');

const express = require('express');

const data = require('../controllers/data');

const router = express.Router();
router.post('/models', data.getData);
router.post('/model/:model', data.getData);
module.exports = router;
