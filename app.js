const express = require('express');
const { config } = require('./config.js');
const home = require('./routes/home');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//JSON
app.use(express.json());

//Home
app.use('/api/home', home);

app.listen(config.port, () => {
	console.log(`Listening on PORT: ${config.port}`);
	console.log(config.port);
});
