'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
const corsOptions = {
    origin: [
        'https://j4q3mt0x-8000.uks1.devtunnels.ms',
        'http://localhost:3000',
    ],
    credentials: true,
    optionsSuccessStatus: 204,
};
app.options('*', (0, cors_1.default)(corsOptions));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.post('/login', (req, res) => {
    const data = req.body;
    console.log('Incoming Connection!');
    setTimeout(() => {
        console.log(data);
        res.send('Recieved:' + JSON.stringify(data));
    }, 500);
});
app.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Recieved:' + JSON.stringify(data));
});
const server = app.listen(port, () => {
    console.log('Listening on port:' + port);
});
server.on('error', console.error);
