'use strict';

import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;
const corsOptions = {
	origin: [
		'https://j4q3mt0x-8000.uks1.devtunnels.ms',
		'http://localhost:3000',
	],
	credentials: true,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/login', (req, res) => {
	const data = req.body;
	console.log('Incoming Connection!!!');
	setTimeout(() => {
		console.log(data);
		res.send(JSON.stringify(data));
	}, 1000);
});

app.post('/register', (req, res) => {
	const data = req.body;
	console.log(data);
	res.send(JSON.stringify(data));
});

const server = app.listen(port, () => {
	console.log('Listening on port:' + port);
});

server.on('error', console.error);
