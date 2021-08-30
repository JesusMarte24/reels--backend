const express = require('express');
const { getMovieInfo } = require('../controllers/movie');

const router = express.Router();

router.get('/info/:id', getMovieInfo);

module.exports = router;
