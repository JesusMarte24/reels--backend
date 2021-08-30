const axios = require('axios').default;
const { config } = require('../config');

const getMovieInfo = async (req, res) => {
	let movieId = req.params.id;

	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/movie/${movieId}${config.api_key}${config.TMDB.language}${config.TMDB.appendVideo}`
		);
		reqResult = reqResult.data;
	} catch (error) {
		return res.status(404).json({
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
	getMovieInfo,
};
