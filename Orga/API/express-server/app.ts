'use strict';

import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());

const login = app.post('/login', (req, res) => {
	const data = req.body;
	console.log('Incoming Connection!');
	setTimeout(() => {
		console.log(data);
		res.send('Recieved:' + JSON.stringify(data));
	}, 500);
});
login.on('error', console.error);

const register = app.post('/register', (req, res) => {
	const data = req.body;
	console.log(data);
	res.send('Recieved:' + JSON.stringify(data));
});
register.on('error', console.error);

const server = app.listen(port, () => {
	console.log('Listening on port:' + port);
});

server.on('error', console.error);
