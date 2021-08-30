const axios = require('axios').default;
const { config } = require('../config');

const getHomeCarrousel = async (req, res) => {
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/all/day?api_key=${config.api_key}${config.TMDB.language}`
		);
		reqResult = reqResult.data.results.slice(0, 10);
	} catch (error) {
		return res.status(500).json({
			ok: false,
			error,
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getHomeGridTrending = async (req, res) => {
	let page = req.body.page;
	if (!page) {
		return res.status(400).json({
			ok: false,
			message: 'You have to add a page number',
		});
	}

	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}`
		);
		reqResult = reqResult.data.results.slice(0, 16);
	} catch (error) {
		return res.status(500).json({
			ok: false,
			error,
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

module.exports = {
	getHomeCarrousel,
	getHomeGridTrending,
};
