const { default: axios } = require('axios');
const { config } = require('../config');

const getTvPopular = async (req, res) => {
	const { page } = req.params;
	let reqResult = {};
	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/tv/popular${config.api_key}${config.TMDB.language}&page=${page}`
		);
		reqResult = reqResult.data.results;
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: 'Internal Server Error',
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getTvTopRated = async (req, res) => {
	const { page } = req.params;
	let reqResult = {};
	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/tv/top_rated${config.api_key}${config.TMDB.language}&page=${page}`
		);
		reqResult = reqResult.data.results;
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: 'Internal Server Error',
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getFilmGenre = async (req, res) => {
	let { genre } = req.params;
	const { page } = req.params;
	let reqResult = {};
	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/discover/movie${
				config.api_key
			}&with_genres=${
				config.TMDB.genres.find(
					(e) =>
						e.name.toLocaleLowerCase() === genre.toLocaleLowerCase()
				).id
			}${config.TMDB.language}&page=${page}`
		);
		reqResult = reqResult.data.results;
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: 'Internal Server Error',
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

const getMovieCategory = async (req, res) => {
	let { category } = req.params;
	const { page } = req.params;
	console.log(category);
	let reqResult = {};
	try {
		reqResult = await axios.get(
			`${config.TMDB.baseURL}/movie/${category}${config.api_key}${config.TMDB.language}&page=${page}`
		);
		reqResult = reqResult.data.results;
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: 'Internal Server Error',
		});
	}

	res.status(200).json({
		ok: true,
		reqResult,
	});
};

module.exports = {
	getTvPopular,
	getTvTopRated,
	getFilmGenre,
	getMovieCategory,
};
