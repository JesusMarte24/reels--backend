const express = require('express');
const {
	getHomeCarrousel,
	getHomeGridTrending,
	getTvShow,
} = require('../controllers/home');

const router = express.Router();

router.get('/', getHomeCarrousel);
router.get('/grid/:id', getHomeGridTrending);
router.get('/tv', getTvShow);

module.exports = router;
