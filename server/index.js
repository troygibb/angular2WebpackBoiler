const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/getHousekeepingData', (req, res) => {
	fs.readFile(path.join(__dirname, 'findRatesByDate.json'), 'utf8', (err, data) => {
		if (err) throw err;
		res.json(JSON.parse(data));
	});
})

app.listen(port, () => console.log(`Listening to port http://localhost:${port}/`));