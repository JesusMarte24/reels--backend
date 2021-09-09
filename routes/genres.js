const express = require('express');
const {
	getTvCategory,
	getFilmGenre,
	getMovieCategory,
} = require('../controllers/genres');

const router = express.Router();

router.get('/tv/:category/:page', getTvCategory);
router.get('/movie/:genre/:page', getFilmGenre);
router.get('/category/:category/:page', getMovieCategory);

module.exports = router;
