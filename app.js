const express = require('express');
const { config } = require('./config.js');
const home = require('./routes/home');
const movie = require('./routes/movie');
const show = require('./routes/show');
const search = require('./routes/search');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//JSON
app.use(express.json());

//Home
app.use('/api/home', home);

//Movie Info
app.use('/api/movie', movie);

//Show Info
app.use('/api/show', show);

//Search
app.use('/api/search', search);

app.listen(config.port, () => {
	console.log(`Listening on PORT: ${config.port}`);
	console.log(config.port);
});
