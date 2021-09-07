const express = require('express');
const cors = require('cors');
const path = require('path');
const home = require('./routes/home');
const movie = require('./routes/movie');
const show = require('./routes/show');
const search = require('./routes/search');
const { config } = require('./config');

const app = express();

app.use(express.static('public'));

//CORS
app.use(cors());
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

// Cath All Pattern to handle all routes from front-end
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(config.port, () => {
	console.log(`Listening on PORT: ${config.port}`);
});
