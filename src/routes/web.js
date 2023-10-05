const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getHoidanIt } = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoidanIt);

module.exports = router;