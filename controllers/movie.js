const axios = require('axios').default;
const { config } = require('../config');

const getMovieInfo = async (req, res) => {
	let movieId = req.body.movieId;

	if (!movieId) {
		return res.status(404).json({
			ok: false,
			message: 'You need to add a movie Id',
		});
	}

	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/movie/${movieId}?api_key=${config.api_key}${config.TMDB.language}${config.TMDB.appendVideo}`
		);
		reqResult = reqResult.data;
	} catch (error) {
		return res.status(404).json({
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
	getMovieInfo,
};
