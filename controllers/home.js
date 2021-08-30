const axios = require('axios').default;
const { config } = require('../config');

const getHomeCarrousel = async (req, res) => {
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/all/day${config.api_key}${config.TMDB.language}`
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

const getHomeGridTrending = async (req, res) => {
	let page = req.params.id;
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/discover/movie${config.api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}`
		);
		reqResult = reqResult.data.results.slice(0, 16);
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
