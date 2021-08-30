const express = require('express');
const {
	getHomeCarrousel,
	getHomeGridTrending,
} = require('../controllers/home');

const router = express.Router();

router.get('/', getHomeCarrousel);
router.get('/grid', getHomeGridTrending);

module.exports = router;
