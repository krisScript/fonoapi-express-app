const path = require('path');

const express = require('express');

const home = require('../controllers/home');

const router = express.Router();

/* GET home page. */

router.get('/', home.getHomePage);
module.exports = router;
