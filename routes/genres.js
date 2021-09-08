const express = require('express');
const {
	getTvPopular,
	getTvTopRated,
	getFilmGenre,
	getMovieCategory,
} = require('../controllers/genres');

const router = express.Router();

router.get('/tv/popular/:page', getTvPopular);
router.get('/tv/top-rated/:page', getTvTopRated);
router.get('/movie/:category/:page', getMovieCategory);
router.get('/movie/:genre/:page', getFilmGenre);

module.exports = router;
