const axios = require('axios').default;
const { config } = require('../config');

const getSearchResult = async (req, res) => {
	let page = req.query.page || 1;
	let query = req.query.name;
	query = query.replace(/\s/g, '+'); //This will go in frontend :v

	let reqResult = {};

	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/search/multi${config.api_key}${config.TMDB.language}&query=${query}&page=${page}&include_adult=true`
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

module.exports = {
	getSearchResult,
};
