const express = require('express');
const {
	getTvCategory,
	getFilmGenre,
	getMovieCategory,
} = require('../controllers/genres');

const router = express.Router();

router.get('/tv/:category/:page', getTvCategory);
router.get('/movie/:category/:page', getMovieCategory);
router.get('/movie/:genre/:page', getFilmGenre);

module.exports = router;
