const express = require('express');
const { getMovieInfo } = require('../controllers/movie');

const router = express.Router();

router.get('/info', getMovieInfo);

module.exports = router;
