const express = require('express');
const { getShowInfo } = require('../controllers/show');
const router = express.Router();

router.get('/info/:id', getShowInfo);

module.exports = router;
