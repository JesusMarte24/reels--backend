require('dotenv').config();
const config = {
	api_key: `?api_key=${process.env.TMDB_API_KEY}`,
	port: process.env.API_PORT,
	TMDB: {
		appendVideo: '&append_to_response=videos',
		baseURL: 'https://api.themoviedb.org/3',
		baseVideoURL: 'https://www.youtube.com/watch?v=',
		language: '&language=en-US',
	},
};

module.exports = {
	config,
};
