const axios = require('axios').default;
const { config } = require('../config');

const getHomeCarrousel = async (req, res) => {
	let reqResult = {};
	console.log();
	console.log(req.url);
	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/all/day${config.api_key}${config.TMDB.language}`
		);
		reqResult = reqResult.data.results.slice(0, 10);
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: 'Internal Server Error :v',
			error: error,
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getHomeGridTrending = async (req, res) => {
	let { id: page } = req.params;
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/all/day${config.api_key}&page=${page}`
		);
		reqResult = reqResult.data.results;
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: 'Internal Server Error :v',
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getTvShow = async (req, res) => {
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/tv/day${config.api_key}`
		);
		reqResult = reqResult.data.results.slice(0, 10);
	} catch (error) {
		return res.status(500).json({
			ok: false,
			message: 'Internal Server Error :v',
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
	getTvShow,
};
