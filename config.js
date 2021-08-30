require('dotenv').config();
const config = {
	port: process.env.API_PORT,
	TMDB: {
		baseURL: 'https://api.themoviedb.org/3',
		baseVideoURL: 'https://www.youtube.com/watch?v=',
		imgagesSizes: {
			backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
			logo_sizes: [
				'w45',
				'w92',
				'w154',
				'w185',
				'w300',
				'w500',
				'original',
			],
			poster_sizes: [
				'w92',
				'w154',
				'w185',
				'w342',
				'w500',
				'w780',
				'original',
			],
			profile_sizes: ['w45', 'w185', 'h632', 'original'],
			still_sizes: ['w92', 'w185', 'w300', 'original'],
		},
	},
};

module.exports = {
	config,
};
