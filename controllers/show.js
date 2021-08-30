const axios = require('axios').default;
const { config } = require('../config');

const getShowInfo = async (req, res) => {
	let reqResult = {};
	let showId = req.params.id;

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/tv/${showId}${config.api_key}${config.TMDB.language}${config.TMDB.appendVideo}`
		);
		reqResult = reqResult.data;
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
	getShowInfo,
};
