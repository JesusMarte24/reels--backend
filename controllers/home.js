const axios = require('axios').default;
const { config } = require('../config');

// Video
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

const getHomeCarrousel = async (req, res) => {
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/trending/all/day?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		reqResult = reqResult.data.results.slice(0, 10);
	} catch (error) {
		return res.json({
			ok: false,
			error,
		});
	}

	res.json({
		ok: true,
		reqResult,
	});
};

const getHomeGridTrending = async (req, res) => {
	let page = req.body.page || 1;
	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}`
		);
		reqResult = reqResult.data.results.slice(0, 16);
	} catch (error) {
		return res.json({
			ok: false,
			error,
		});
	}

	res.json({
		ok: true,
		reqResult,
	});
};

module.exports = {
	getHomeCarrousel,
	getHomeGridTrending,
};
